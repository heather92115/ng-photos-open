import {Injectable} from '@angular/core';
import {Headers, RequestOptions, Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class PhotosService {

    static PHOTO_SERVICES_BASE_URL = '/tfservices/photos';
    private headers = new Headers({'Content-Type': 'application/json'});
    private options = new RequestOptions({headers: this.headers});

    constructor(private http: Http) {
    }

    public getAllPhotos(): Observable<Response> {
        return this.http.get(PhotosService.PHOTO_SERVICES_BASE_URL, this.options);
    }
}
