import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'displayGroup',
    template: `  
    <div class="header rating-group-header"><h2>{{name}}</h2></div>                   
    <div class="rating-group-content">
        <displayItem class="rating-item pure-g"></displayItem>
        <displayItem class="rating-item pure-g"></displayItem>
    </div>
    `,
})
export class DisplayGroupComponent  {
    name: string;

    constructor() {
        this.name = "Temp";
    }
}
