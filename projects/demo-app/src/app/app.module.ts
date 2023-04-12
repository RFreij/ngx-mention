import { APP_BASE_HREF } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { NgxMentionModule } from 'projects/ngx-mention/src/lib/ngx-mention.module';
import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { AsyncComponent } from './async/async.component';
import { StaticComponent } from './static/static.component';

const routes: Routes = [
    {
        path: 'ngx-mention',
        children: [
            {
                path: '',
                redirectTo: 'static'
            },
            {
                path: 'static',
                component: StaticComponent,
            },
            {
                path: 'async',
                component: AsyncComponent,
            },
        ]
    }
];

@NgModule({
    declarations: [AppComponent, AsyncComponent, StaticComponent],
    imports: [
        BrowserModule,
        NgxMentionModule,
        HttpClientModule,
        BrowserAnimationsModule,
        MatSidenavModule,
        MatToolbarModule,
        MatIconModule,
        MatListModule,
        MatButtonModule,
        RouterModule.forRoot(routes),
    ],
    providers: [
        {
            provide: APP_BASE_HREF,
            useValue: environment.baseHref,
        },
    ],
    bootstrap: [AppComponent],
})
export class AppModule { }
