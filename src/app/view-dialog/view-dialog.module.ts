import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ViewDialogComponent} from './view-dialog.component';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        ViewDialogComponent
    ],
    exports: [
        ViewDialogComponent
    ],
})
export class ViewDialogModule {
}
