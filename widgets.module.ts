import { NgModule, ModuleWithProviders } from '@angular/core'; 
import { BrowserModule } from '@angular/platform-browser'; // this is so ngIf, etc works

import { WidgetInterface } from './widget.interface';
import { WidgetsComponent } from './widgets.component';
import { WidgetComponent, SafeHTMLPipe, DynamicWidgetDirective } from './widget.component';

export { WidgetsComponent } from './widgets.component'

export interface WidgetOptions {
  widgets_url?:string
}

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
export class WidgetsModule {

    private static widgetsURL = null;

    static setOptions(opts?: WidgetOptions) {

        this.widgetsURL = opts && opts.widgets_url;
        return this;
    };

    static getWidgetsURL():string {

      return this.widgetsURL;
    };
}
