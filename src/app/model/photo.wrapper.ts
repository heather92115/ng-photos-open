
import {Photo} from './photo';
export class PhotoWrapper {

    private _photo: Photo;
    private _cameraMakeModel: string;
    private _takenFormatted: string;
    private _prefixedPhotoContent: string;

    get photo(): Photo {
        return this._photo;
    }

    set photo(value: Photo) {
        this._photo = value;
    }

    get cameraMakeModel(): string {
        return this._cameraMakeModel;
    }

    set cameraMakeModel(value: string) {
        this._cameraMakeModel = value;
    }

    get takenFormatted(): string {
        return this._takenFormatted;
    }

    set takenFormatted(value: string) {
        this._takenFormatted = value;
    }

    get prefixedPhotoContent(): string {
        return this._prefixedPhotoContent;
    }

    set prefixedPhotoContent(value: string) {
        this._prefixedPhotoContent = value;
    }
}

