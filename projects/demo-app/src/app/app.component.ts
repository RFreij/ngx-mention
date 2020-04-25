import { Component } from '@angular/core';
import { NgxMentionConfig } from 'projects/ngx-mention/src/lib/ngx-mention.config';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    title = 'demo-app';

    public ngxMentionConfig: NgxMentionConfig;

    public items = [
        {
            id: 1,
            value: 'user',
        },
        {
            id: 2,
            value: 'tekstschrijver',
        },
        {
            id: 3,
            value: 'admin',
        },
        {
            id: 4,
            value: 'abominablejustine',
        },
        {
            id: 5,
            value: 'abominable_justine',
        },
        {
            id: 6,
            value: 'abominable',
        },
        {
            id: 7,
            value: 'alarmingjustine',
        },
        {
            id: 8,
            value: 'alarming_justine',
        },
        {
            id: 9,
            value: 'appallingjustine',
        },
        {
            id: 10,
            value: 'appalling_justine',
        },
        {
            id: 11,
            value: 'atrociousjustine',
        },
        {
            id: 12,
            value: 'atrocious_justine',
        },
        {
            id: 13,
            value: 'awfuljustine',
        },
        {
            id: 14,
            value: 'awful_justine',
        },
    ];

    constructor() {
        this.ngxMentionConfig = {
            minimalCharacters: 0,
        };
    }

    public onMentionSearch($event: string) {
        // this.items.push({
        //     id: 4,
        //     value: 'crew',
        // });
    }
}
