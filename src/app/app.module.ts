import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { AppComponent }  from './app.component';
import { ToolboxComponent }  from './components/toolbox.component';
import { EditComponent }  from './components/edit.component';
import { DisplayComponent }  from './components/display.component';
import { DisplayGroupComponent }  from './components/display-group.component';
import { DisplayItemComponent }  from './components/display-item.component';
import { ShareDialogComponent }  from './components/share-dialog.component';

@NgModule({
  imports:      [ 
                  BrowserModule, 
                  HttpModule ],
  declarations: [ 
                  AppComponent, 
                  ToolboxComponent, 
                  EditComponent, 
                  DisplayComponent,
                  DisplayGroupComponent,
                  DisplayItemComponent,
                  ShareDialogComponent
                ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
