import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'displayItem',
    template: `    
    <div class="item-label pure-u-1-2">{{label}}</div>
    <div class="item-label item-category pure-u-1-2">{{category}}</div>
    `,
})
export class DisplayItemComponent  {
    label: string;
    category: string;

    constructor() {
        this.label = "Temp";
        this.category = "Temp";
    }
}
