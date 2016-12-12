import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeComponent} from './home.component';

import {DataTableModule, SharedModule} from 'primeng/primeng';
import {FormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {ViewDialogModule} from '../view-dialog/view-dialog.module';

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        FormsModule,
        SharedModule,
        DataTableModule,
        ViewDialogModule
    ],
    declarations: [HomeComponent]
})
export class HomeModule {
}
