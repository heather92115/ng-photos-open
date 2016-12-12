import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PhotosComponent} from './photos.component';
import {PhotosService} from './photos.service';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        PhotosComponent
    ],
    providers: [PhotosService],
    bootstrap: [PhotosComponent]
})
export class PhotosModule {
}
