import {Component, OnInit} from '@angular/core';
import {PhotosStore} from '../photos/photos.store';
import {PhotoWrapper} from '../model/photo.wrapper';

@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    private siteSummary = 'Find cool background photos for your desktop.';
    private selected: PhotoWrapper;
    private selectedSourceUrl: string;
    private selectedLargeSourceUrl: string;

    constructor(private photosStore: PhotosStore) {
    }

    ngOnInit() {
    }

    selectPhoto(photoWrapper: PhotoWrapper) {
        this.selected = photoWrapper;
        this.selectedSourceUrl = '/tfservices/photos/medium/' + this.selected.photo.mediumPhotoId;
        this.selectedLargeSourceUrl = '/tfservices/photos/large/' + this.selected.photo.largePhotoId;
    }
}
