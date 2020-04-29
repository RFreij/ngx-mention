import { NgTemplateOutlet } from '@angular/common';
import { Component, TemplateRef, ViewChild } from '@angular/core';
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
    public dropUpItems = Users;
    public customTemplateItems = Users.map((item) => {
        return {
            username: item.value,
            id: item.id,
        };
    });

    public customSearchNgxMentionConfig: NgxMentionConfig;
    public customDenotationCharacterConfig: NgxMentionConfig;
    public minCharactersConfig: NgxMentionConfig;
    public dropUpConfig: NgxMentionConfig;
    public customTemplateConfig: NgxMentionConfig;

    @ViewChild('customTemplate') public customTemplate: TemplateRef<
        NgTemplateOutlet
    >;

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

        this.dropUpConfig = {
            dropUp: true,
        };

        this.customTemplateConfig = {
            disableSearch: true,
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
