import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgxMentionListComponent } from './ngx-mention-list/ngx-mention-list.component';
import { NgxMentionDirective } from './ngx-mention.directive';

@NgModule({
    declarations: [NgxMentionDirective, NgxMentionListComponent],
    imports: [CommonModule],
    exports: [NgxMentionDirective],
})
export class NgxMentionModule {}
