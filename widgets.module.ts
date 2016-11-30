import { NgModule } from '@angular/core'; 
import { BrowserModule } from '@angular/platform-browser'; // this is so ngIf, etc works

import { WidgetInterface } from './widget.interface';
import { WidgetsComponent } from './widgets.component';
import { WidgetComponent, SafeHTMLPipe, DynamicWidgetDirective } from './widget.component';

@NgModule({
  imports: [
      BrowserModule
  ],
  declarations: [
    WidgetsComponent, WidgetComponent, DynamicWidgetDirective, SafeHTMLPipe
  ],
  exports: [
    WidgetsComponent
  ],
  //entryComponents: [],
  //providers: []
})

export class WidgetsModule {}
export { WidgetsComponent } from './widgets.component'

