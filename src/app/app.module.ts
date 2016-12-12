import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {PhotosModule} from './photos/photos.module';
import {PhotosComponent} from './photos/photos.component';
import {PhotosService} from './photos/photos.service';
import {Routes, RouterModule} from '@angular/router';
import {HashLocationStrategy, LocationStrategy} from '@angular/common';
import {HomeModule} from './home/home.module';
import {HomeComponent} from './home/home.component';
import {AboutComponent} from './about/about.component';
import {AboutModule} from './about/about.module';
import {PhotosStore} from './photos/photos.store';


const routes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent},
    {path: 'photos', component: PhotosComponent},
    {path: 'about', component: AboutComponent},
];

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        RouterModule.forRoot(routes),
        FormsModule,
        ReactiveFormsModule,
        HttpModule,
        HomeModule,
        PhotosModule,
        AboutModule
    ],
    providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}, PhotosService, PhotosStore],
    bootstrap: [AppComponent]
})
export class AppModule {
}
