import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxMentionModule } from 'projects/ngx-mention/src/lib/ngx-mention.module';
import { AppComponent } from './app.component';

@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, NgxMentionModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
