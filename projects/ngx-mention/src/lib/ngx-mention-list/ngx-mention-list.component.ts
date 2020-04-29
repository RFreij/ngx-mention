import {
    Component,
    ElementRef,
    EventEmitter,
    Output,
    Renderer2,
    ViewChild,
} from '@angular/core';
import { getCaretCoordinates } from '../caret-coords';
import {
    NgxMention,
    NgxMentionConfig,
    NgxMentionTemplate,
} from '../ngx-mention.config';

const FIRST_ITEM_INDEX = 0;
const SELECTED_CLASS = 'ngx-mention__item--selected';

@Component({
    selector: 'nc-ngx-mention-list',
    templateUrl: './ngx-mention-list.component.html',
    styleUrls: ['./ngx-mention-list.component.scss'],
})
export class NgxMentionListComponent {
    public items: NgxMention[] = [];
    public hidden = true;
    public activeIndex = 0;
    public ngxMentionConfig: NgxMentionConfig;
    public customTemplate: NgxMentionTemplate;

    @ViewChild('container') public container: ElementRef;
    @Output() itemClick: EventEmitter<void>;

    constructor(
        private readonly elementRef: ElementRef,
        private readonly renderer: Renderer2,
    ) {
        this.itemClick = new EventEmitter();
    }

    /**
     * Positions ngx mention list component
     *
     * @param parentElement
     *
     * @author Roy Freij <info@royfreij.nl>
     * @version 1.0.0
     */
    public position(
        parentElement: HTMLInputElement | HTMLTextAreaElement,
    ): void {
        const nativeElement = this.elementRef.nativeElement;

        const coords = getCaretCoordinates(
            parentElement,
            parentElement.selectionStart,
            null,
        );
        coords.top =
            parentElement.offsetTop + coords.top - parentElement.scrollTop;
        coords.left =
            parentElement.offsetLeft + coords.left - parentElement.scrollLeft;

        const offsetTop = parseFloat(
            window.getComputedStyle(parentElement).lineHeight,
        );

        const top = coords.top + offsetTop;

        this.renderer.setStyle(nativeElement, 'position', 'absolute');
        this.renderer.setStyle(nativeElement, 'left', `${coords.left}px`);
        this.renderer.setStyle(nativeElement, 'top', `${top}px`);
    }

    /**
     * Activates next item
     *
     * @author Roy Freij <info@royfreij.nl>
     * @version 1.0.0
     */
    public activateNextItem(): void {
        const container: HTMLDivElement = this.container.nativeElement;
        const activeElement = container
            .getElementsByClassName(SELECTED_CLASS)
            .item(FIRST_ITEM_INDEX);

        if (activeElement) {
            const activeItemIndex = this.getItemIndex(activeElement.id);

            const nextItemIndex = activeItemIndex + 1;
            const nextElement = document.getElementById(
                `mention-item-${nextItemIndex}`,
            );

            if (nextElement) {
                const nextElementRect = nextElement.getBoundingClientRect();

                if (
                    nextElementRect.bottom >
                    container.getBoundingClientRect().bottom
                ) {
                    container.scrollTop =
                        nextElement.offsetTop +
                        nextElementRect.height -
                        container.clientHeight;
                }

                this.activeIndex = nextItemIndex;
            }
        }
    }

    /**
     * Activates previous item
     *
     * @author Roy Freij <info@royfreij.nl>
     * @version 1.0.0
     */
    public activatePreviousItem(): void {
        const container: HTMLDivElement = this.container.nativeElement;
        const activeElement = container
            .getElementsByClassName(SELECTED_CLASS)
            .item(FIRST_ITEM_INDEX);

        if (activeElement) {
            const activeItemIndex = this.getItemIndex(activeElement.id);

            const nextItemIndex = activeItemIndex - 1;
            const previousElement = document.getElementById(
                `mention-item-${nextItemIndex}`,
            );

            if (previousElement) {
                const previousElementRect = previousElement.getBoundingClientRect();

                if (
                    previousElementRect.bottom <
                    container.getBoundingClientRect().top
                ) {
                    container.scrollTop = previousElement.offsetTop;
                }

                this.activeIndex = nextItemIndex;
            }
        }
    }

    /**
     * Determines whether item is clicked on
     *
     * @param item
     *
     * @author Roy Freij <info@royfreij.nl>
     * @version 1.0.0
     */
    public onItemCLick(index: number): void {
        this.activeIndex = index;
        this.itemClick.emit();
    }

    /**
     * Resets scroll top
     *
     * @author Roy Freij <info@royfreij.nl>
     * @version 1.0.0
     */
    public resetScrollTop(): void {
        // Needs to be activated after the container is created
        setTimeout(() => {
            this.container.nativeElement.scrollTop = 0;
        });
    }

    /**
     * Tracks by chat message id
     *
     * @param index
     * @param item
     *
     * @returns ngx mention item ID
     *
     * @author Roy Freij <roy@bsbip.com>\
     * @version 1.0.0
     */
    public trackByItemId(index: number, item: NgxMention): string | number {
        return item.id;
    }

    /**
     * Gets item index
     *
     * @param elementId
     *
     * @returns index
     *
     * @author Roy Freij <info@royfreij.nl>
     */
    private getItemIndex(elementId: string): number {
        return parseFloat(elementId.split('mention-item-')[1]);
    }
}
