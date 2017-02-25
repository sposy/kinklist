import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { ToolboxComponent }  from './components/toolbox.component';
import { EditComponent }  from './components/edit.component';
import { DisplayComponent }  from './components/display.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, ToolboxComponent, EditComponent, DisplayComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
