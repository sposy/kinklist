import { Component } from '@angular/core';

@Component({
    selector: 'shareDialog',
    template: `
    <div class="modal-background pure-g">
        <div class="modal pure-u-3-4 pure-u-md-2-3 pure-u-lg-1-2 pure-u-xl-1-3">
            <div class="">
                <h2>Share</h2>
            </div>
            <textarea class="share-link">{{linkText}}</textarea>
            <div class="modal-feedback">{{feedbackText}}</div>
            <div class="modal-buttons">
                <button class="pure-button modal-button">Copy link</button>
                <button class="pure-button modal-button">Copy as markdown link</button>
                <button class="pure-button modal-button modal-button-close">Close</button>
            </div>
        </div>
    </div>
    `,
})
export class ShareDialogComponent  {
    linkText: string;
    feedbackText: string;

    constructor() {
        this.linkText = "Todo";
        this.feedbackText = "";
    }
}
