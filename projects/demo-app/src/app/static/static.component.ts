import { Component } from '@angular/core';
import {
    NgxMention,
    NgxMentionConfig,
} from 'projects/ngx-mention/src/lib/ngx-mention.config';
import { Users } from '../users';

@Component({
    selector: 'app-static',
    templateUrl: './static.component.html',
    styleUrls: ['./static.component.scss'],
})
export class StaticComponent {
    public items = Users;
    public customSearchItems = Users;
    public customDenotationItems = Users;
    public minCharacterItems = Users;

    public customSearchNgxMentionConfig: NgxMentionConfig;
    public customDenotationCharacterConfig: NgxMentionConfig;
    public minCharactersConfig: NgxMentionConfig;

    constructor() {
        this.customSearchNgxMentionConfig = {
            disableSearch: true,
        };

        this.customDenotationCharacterConfig = {
            denotationCharacter: '$',
        };

        this.minCharactersConfig = {
            minimalCharacters: 3,
        };
    }

    public onCustomSearchMentionSearch($event: string) {
        this.customSearchItems = this.customSearchItems.filter(
            (item: NgxMention) => {
                return item.value.toLowerCase().includes($event.toLowerCase());
            },
        );
    }

    public onMinCharacterSearchMentionSearch($event: string) {
        this.customSearchItems = this.customSearchItems.filter(
            (item: NgxMention) => {
                return item.value.toLowerCase().includes($event.toLowerCase());
            },
        );
    }
}
