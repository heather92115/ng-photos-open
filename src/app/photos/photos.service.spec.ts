/* tslint:disable:no-unused-variable */

import {TestBed, async, inject, getTestBed} from '@angular/core/testing';
import { PhotosService } from './photos.service';
import { MockBackend, MockConnection } from "@angular/http/testing";
import {
  Headers, BaseRequestOptions,
  Response, HttpModule, Http, XHRBackend, RequestMethod, ResponseOptions
} from "@angular/http";
import {Photo} from "../model/photo";

describe('PhotosService', () => {

  let mockBackend: MockBackend;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [PhotosService,
        MockBackend,
        BaseRequestOptions,
        {
          provide: Http,
          deps: [MockBackend, BaseRequestOptions],
          useFactory:
              (backend: XHRBackend, defaultOptions: BaseRequestOptions) => {
                return new Http(backend, defaultOptions);
              }
        }
      ],
      imports: [
        HttpModule
      ]
    });
    mockBackend = getTestBed().get(MockBackend);
    TestBed.compileComponents().then(() => {
      mockBackend.connections.subscribe(
          (connection: MockConnection) => {
            connection.mockRespond(new Response(
                new ResponseOptions({
                      body: [{"id":"58053d6e946a8a5c8ba2b5f0","userId":"58053a51946a8a5985538691","userName":"heather1","mediumPhotoId":"58053d6e946a8a5c8ba2b5f2","largePhotoId":"58053d6e946a8a5c8ba2b5f1","photoName":"Peach","description":null,"rating":null,"originalFileName":"Peach.JPG","size":3668709,"url":null,"photoContent":"/9j/4AAQSkZJRgABAgAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgK....R//9k=","photoType":"image/jpeg","taken":1305398137000,"uploaded":1476738414190,"height":2513,"width":3776,"exposureTime":"1/60 sec","exposureBias":"0 EV","aperture":null,"isoSpeed":"100","whiteBalance":"Unknown","focalLength":"30.0 mm","lensModel":null,"cameraMake":"SONY ","cameraModel":"DSLR-A390","gpsLatitude":null,"gpsLatitudeRef":null,"gpsLongitude":null,"gpsLongitudeRef":null,"gpsAltitude":null,"gpsAltitudeRef":null,"gpsTrack":null}]
                    }
                )));
          });
    });
  }));

  it('should be able to inject service', inject([PhotosService], (service: PhotosService) => {
    expect(service).toBeDefined();
  }));

  it('should be able to inject service asynchronously', async(() => {
    inject([PhotosService], (service: PhotosService) => {
      expect(service).toBeDefined();
    });
  }));

  it('should get a list of photos', async(() => {
    inject([PhotosService], (service: PhotosService) => {
      service.getAllPhotos().subscribe( response => {

        expect(response).toBeDefined();
        let photos: Photo[] = response.json();
        expect(photos.length).toBe(1);
        expect(photos[0].id).toBeDefined();
      });
    });
  }));

});
