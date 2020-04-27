import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import {
    NgxMention,
    NgxMentionConfig,
} from 'projects/ngx-mention/src/lib/ngx-mention.config';
import { delay, map } from 'rxjs/operators';

@Component({
    selector: 'app-async',
    templateUrl: './async.component.html',
    styleUrls: ['./async.component.scss'],
})
export class AsyncComponent {
    public asyncSearchItems = [];
    public customDenotationItems = [];

    public customSearchNgxMentionConfig: NgxMentionConfig;
    public customDenotationCharacterConfig: NgxMentionConfig;

    constructor(private readonly httpClient: HttpClient) {
        this.customSearchNgxMentionConfig = {
            disableSearch: true,
        };

        this.customDenotationCharacterConfig = {
            disableSearch: true,
            denotationCharacter: '$',
        };
    }

    public onSearch($event: string) {
        this.httpClient
            .get('/assets/users.json')
            .pipe(
                delay(200),
                map((items: NgxMention[]) => {
                    return items.filter((item: NgxMention) => {
                        return item.value
                            .toLowerCase()
                            .includes($event.toLowerCase());
                    });
                }),
            )
            .subscribe((items: NgxMention[]) => {
                this.asyncSearchItems = items;
            });
    }

    public onCustomDenotationSearch($event: string) {
        this.httpClient
            .get('/assets/users.json')
            .pipe(
                delay(200),
                map((items: NgxMention[]) => {
                    return items.filter((item: NgxMention) => {
                        return item.value
                            .toLowerCase()
                            .includes($event.toLowerCase());
                    });
                }),
            )
            .subscribe((items: NgxMention[]) => {
                this.customDenotationItems = items;
            });
    }
}
