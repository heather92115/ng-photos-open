

import {Injectable} from '@angular/core';
import {Photo} from '../model/photo';
import {BehaviorSubject} from 'rxjs';
import {List} from 'immutable';
import {PhotosService} from './photos.service';
import * as moment from 'moment';
import {PhotoWrapper} from '../model/photo.wrapper';

@Injectable()
export class PhotosStore {
    static DATE_FORMAT = 'dddd, MMMM Do YYYY, h:mm a';
    static JPG_PREFIX = 'data:image/jpg;base64,';
    private _photoList: BehaviorSubject<PhotoWrapper[]> = new BehaviorSubject([]);

    constructor(private photosService: PhotosService) {
        this.loadPhotos();
    }

    public get photoList() {
        return this._photoList.asObservable();
    }

    private loadPhotos() {
        this.photosService.getAllPhotos().subscribe(response => {

            let photos: Photo[] = response.json();
            let photoWrappers: PhotoWrapper[] = [];

            photos.forEach(photo => {

                let photoWrapper: PhotoWrapper = new PhotoWrapper();
                photoWrapper.photo = photo;
                photoWrapper.cameraMakeModel = photo.cameraMake + ' ' + photo.cameraModel;
                photoWrapper.takenFormatted = moment(photo.taken).format(PhotosStore.DATE_FORMAT);
                photoWrapper.prefixedPhotoContent = PhotosStore.JPG_PREFIX +  photo.photoContent;
                photoWrappers.push(photoWrapper);
            });

            console.log('number of photos ' + photoWrappers.length);

            this._photoList.next(photoWrappers);
        },
        err => {
            console.error('Failed get photos ', err)
        });
    }
}
