
export interface Photo {
    id: string;
    mediumPhotoId: string;
    largePhotoId: string;
    userName: string;
    photoName: string;
    size: number;
    taken: Date;
    uploaded: Date;

    // Exif SubIFD
    height: number;
    width: number;
    exposureTime: string;
    exposureBias: string;
    aperture: string;
    isoSpeed: string;
    whiteBalance: string;
    focalLength: string;
    lensModel: string;

    // Exif IFD0
    cameraMake: string;
    cameraModel: string;

    // GPS
    gpsLatitude: number;
    gpsLatitudeRef: string;
    gpsLongitude: number;
    gpsLongitudeRef: string;
    gpsAltitude: string;
    gpsAltitudeRef: string;
    gpsTrack: string;

    photoContent: string;
    photoType: string;
}