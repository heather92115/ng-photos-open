import {Component, OnInit, Input} from '@angular/core';

const screenfull = require('screenfull');
const $ = require('jquery');

@Component({
    selector: 'image-viewing-dialog',
    templateUrl: './view-dialog.component.html',
    styleUrls: ['./view-dialog.component.css']
})
export class ViewDialogComponent implements OnInit {

    @Input() sourceUrl : string;
    @Input() largeSourceUrl : string;

    private visible : boolean = false;
    private fullscreen : boolean = false;

    constructor() {}

    ngOnInit() {}

    showImageViewer() {
        this.visible = true;
    }

    hideImageViewer() {
        this.visible = false;
    }

    showFullscreenView() {
        this.fullscreen = true;
        $('body#mainBody').css('overflow', 'hidden');


        if (screenfull.enabled && !screenfull.isFullscreen) {
            screenfull.toggle();
        }
    }

    hideFullscreenView() {
        this.fullscreen = false;
        $('body#mainBody').css('overflow', 'auto');

        if (screenfull.enabled && screenfull.isFullscreen) {
            screenfull.toggle();
        }
    }

}
