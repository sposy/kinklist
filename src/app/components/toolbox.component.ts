import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'toolbox',
    template: `
    <div class="toolbox pure-menu-horizontal">
        <ul class="pure-menu-list">
            <li class="pure-menu-item"><a href="" class="pure-menu-link"><i class="fa fa-exchange"></i> Toggle</a></li>
            <li class="pure-menu-item"><a href="" class="pure-menu-link"><i class="fa fa-share-alt"></i> Share</a></li>
        </ul>
    </div>
    `,
})
export class ToolboxComponent  {
}
