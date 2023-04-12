import { APP_BASE_HREF } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, Inject } from '@angular/core';
import {
  NgxMention,
  NgxMentionConfig,
} from 'projects/ngx-mention/src/lib/ngx-mention.config';

@Component({
  selector: 'app-async',
  templateUrl: './async.component.html',
  styleUrls: ['./async.component.scss'],
})
export class AsyncComponent {
  public asyncSearchItems: NgxMention[] = [];
  public customDenotationItems: NgxMention[] = [];

  public customSearchNgxMentionConfig: NgxMentionConfig;
  public customDenotationCharacterConfig: NgxMentionConfig;

  constructor(
    private readonly httpClient: HttpClient,
    @Inject(APP_BASE_HREF) private readonly baseHref: string
  ) {
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
      .get<NgxMention[]>(`${this.baseHref}assets/users.json`)

      .subscribe((items: NgxMention[]) => {
        this.asyncSearchItems = items.filter((item) => {
          return item.value.toLowerCase().includes($event.toLowerCase());
        });
      });
  }

  public onCustomDenotationSearch($event: string) {
    this.httpClient
      .get<NgxMention[]>(`${this.baseHref}assets/users.json`)
      .subscribe((items: NgxMention[]) => {
        this.customDenotationItems = items.filter((item) => {
          return item.value.toLowerCase().includes($event.toLowerCase());
        });
      });
  }
}
