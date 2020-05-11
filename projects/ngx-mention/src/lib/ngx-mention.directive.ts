import {
    ComponentFactoryResolver,
    Directive,
    ElementRef,
    EventEmitter,
    Input,
    OnChanges,
    OnDestroy,
    OnInit,
    Output,
    SimpleChanges,
    ViewContainerRef,
} from '@angular/core';
import { fromEvent, Subscription } from 'rxjs';
import { distinctUntilChanged, filter } from 'rxjs/operators';
import { NgxMentionListComponent } from './ngx-mention-list/ngx-mention-list.component';
import {
    NgxMention,
    NgxMentionConfig,
    NgxMentionTemplate,
} from './ngx-mention.config';

@Directive({
    selector: '[ncNgxMention]',
})
export class NgxMentionDirective implements OnInit, OnChanges, OnDestroy {
    @Input('ncNgxMention') public items: any[] = [];
    @Input() public ngxMentionConfig: NgxMentionConfig = {};
    @Input() public customTemplate?: NgxMentionTemplate;

    @Output() searchTerm: EventEmitter<string>;
    @Output() selectItem: EventEmitter<NgxMention>;

    private keyDown$: Subscription;
    private input$: Subscription;
    private blur$: Subscription;
    private mentionListItemClick$: Subscription;

    private defaultConfig: NgxMentionConfig;

    private startIndex: number;
    private searching = false;
    private nativeElement: HTMLInputElement | HTMLTextAreaElement;

    private mentionList: NgxMentionListComponent = null;

    constructor(
        private readonly elementRef: ElementRef<
            HTMLInputElement | HTMLTextAreaElement
        >,
        private readonly componentResolver: ComponentFactoryResolver,
        private readonly viewContainerRef: ViewContainerRef,
    ) {
        this.searchTerm = new EventEmitter();
        this.selectItem = new EventEmitter();

        this.defaultConfig = {
            denotationCharacter: '@',
            minimalCharacters: 0,
            disableSearch: false,
            dropUp: false,
        };
    }

    /**
     * on init
     *
     * @author Roy Freij <info@royfreij.nl>
     * @version 1.0.0
     */
    public ngOnInit(): void {
        this.ngxMentionConfig = {
            ...this.defaultConfig,
            ...this.ngxMentionConfig,
        };

        this.nativeElement = this.elementRef.nativeElement;

        this.input$ = fromEvent(this.nativeElement, 'input').subscribe(() => {
            const mentionDenotationCharacter = this.ngxMentionConfig
                .denotationCharacter;

            if (this.nativeElement.value.endsWith(mentionDenotationCharacter)) {
                this.startIndex = this.nativeElement.value.length;
                this.searching = true;
            }

            const endIndex = this.nativeElement.value.length;

            const searchValue = this.nativeElement.value.substring(
                this.startIndex,
                endIndex,
            );

            if (
                this.searching &&
                searchValue.length >= this.ngxMentionConfig.minimalCharacters
            ) {
                if (endIndex < this.startIndex) {
                    this.stopSearch();
                } else {
                    this.startSearching(searchValue);
                }
            }
        });

        this.keyDown$ = fromEvent(this.nativeElement, 'keydown')
            .pipe(
                distinctUntilChanged(),
                filter(($event: KeyboardEvent) => {
                    return $event.key !== 'Shift';
                }),
            )
            .subscribe(($event: KeyboardEvent) => {
                if (!this.mentionList?.hidden && this.searching) {
                    switch ($event.key) {
                        case 'Tab':
                        case 'Enter':
                            this.stopEvent($event);
                            this.onItemSelect();
                            break;
                        case 'Escape':
                            this.stopSearch();
                            break;
                        case 'ArrowDown':
                            this.stopEvent($event);
                            this.mentionList.activateNextItem();
                            break;
                        case 'ArrowUp':
                            this.stopEvent($event);
                            this.mentionList.activatePreviousItem();
                            break;
                        default:
                    }
                }
            });

        this.blur$ = fromEvent(this.nativeElement, 'blur').subscribe(
            ($event) => {
                if ($event instanceof KeyboardEvent) {
                    this.stopEvent($event);
                    this.stopSearch();
                }
            },
        );
    }

    /**
     * on changes
     *
     * @param changes
     *
     * @author Roy Freij <info@royfreij.nl>
     * @version 1.0.0
     */
    public ngOnChanges(changes: SimpleChanges): void {
        if (changes.items && !changes.items.firstChange) {
            this.updateMentionListItems(this.items);

            if (changes.items.currentValue.length === 0) {
                this.stopSearch();
            }
        }
    }

    /**
     * Starts searching
     *
     * @param endIndex
     *
     * @author Roy Freij <info@royfreij.nl>
     * @version 1.0.0
     */
    private async startSearching(searchValue) {
        let matches: NgxMention[];

        this.searchTerm.emit(searchValue);

        this.showMentionList();

        if (!this.ngxMentionConfig.disableSearch) {
            matches = this.items.filter((item: NgxMention) => {
                if (this.customTemplate) {
                    return item[this.customTemplate.label]
                        .toLowerCase()
                        .startsWith(searchValue.toLowerCase());
                } else {
                    return item.value
                        .toLowerCase()
                        .startsWith(searchValue.toLowerCase());
                }
            });

            this.updateMentionListItems(matches);
        }
    }

    /**
     * Determines whether item is selected
     *
     * @author Roy Freij <info@royfreij.nl>
     * @version 1.0.0
     */
    private onItemSelect(): void {
        const selectedItem = this.mentionList.items[
            this.mentionList.activeIndex
        ];
        let selectedItemValue: string;

        if (this.customTemplate) {
            selectedItemValue = selectedItem[this.customTemplate.label];
        } else {
            selectedItemValue = selectedItem.value;
        }

        this.nativeElement.value =
            this.nativeElement.value.substring(0, this.startIndex) +
            selectedItemValue +
            ' ';

        this.nativeElement.focus();

        const valueLength = this.nativeElement.value.length;
        this.nativeElement.setSelectionRange(valueLength, valueLength);
        this.nativeElement.dispatchEvent(new Event('input'));

        this.selectItem.emit(selectedItem);
        this.stopSearch();
    }

    /**
     * Updates mention list items
     *
     * @param items
     *
     * @author Roy Freij <info@royfreij.nl>
     * @version 1.0.0
     */
    private updateMentionListItems(items: NgxMention[]) {
        if (this.mentionList) {
            this.mentionList.items = items;
            this.mentionList.hidden = items.length === 0;
            this.mentionList.resetScrollTop();
        }
    }

    /**
     * Shows mention list
     *
     * @author Roy Freij <info@royfreij.nl>
     * @version 1.0.0
     */
    private showMentionList() {
        if (this.mentionList === null) {
            const componentFactory = this.componentResolver.resolveComponentFactory(
                NgxMentionListComponent,
            );
            const componentRef = this.viewContainerRef.createComponent(
                componentFactory,
            );

            this.mentionList = componentRef.instance;
        }

        this.mentionList.activeIndex = 0;
        this.mentionList.position(this.nativeElement);
        this.mentionList.resetScrollTop();
        this.mentionList.ngxMentionConfig = this.ngxMentionConfig;

        if (this.customTemplate) {
            this.mentionList.customTemplate = this.customTemplate;
        }

        if (!this.mentionListItemClick$) {
            this.mentionListItemClick$ = this.mentionList.itemClick.subscribe(
                () => {
                    this.onItemSelect();
                },
            );
        }
    }

    /**
     * Stops event
     *
     * @param $event
     *
     * @author Roy Freij <info@royfreij.nl>
     * @version 1.0.0
     */
    private stopEvent($event: KeyboardEvent): void {
        $event.preventDefault();
        $event.stopPropagation();
        $event.stopImmediatePropagation();
    }

    /**
     * Stops search
     *
     * @author Roy Freij <info@royfreij.nl>
     * @version 1.0.0
     */
    private stopSearch() {
        if (this.mentionList) {
            this.mentionList.hidden = true;
        }

        this.searching = false;
    }

    /**
     * on destroy
     *
     * @author Roy Freij <roy@bsbip.com>
     * @version 1.0.0
     */
    public ngOnDestroy(): void {
        this.input$.unsubscribe();
        this.keyDown$.unsubscribe();
        this.blur$.unsubscribe();
    }
}
