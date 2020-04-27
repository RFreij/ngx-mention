import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxMentionModule } from 'projects/ngx-mention/src/lib/ngx-mention.module';
import { AppComponent } from './app.component';
import { AsyncComponent } from './async/async.component';
import { StaticComponent } from './static/static.component';

@NgModule({
    declarations: [AppComponent, AsyncComponent, StaticComponent],
    imports: [BrowserModule, NgxMentionModule, HttpClientModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
