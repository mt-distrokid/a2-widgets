import { NgModule, ModuleWithProviders } from '@angular/core'; 
import { BrowserModule } from '@angular/platform-browser'; // this is so ngIf, etc works

import { WidgetInterface } from './widget.interface';
import { WidgetsComponent } from './widgets.component';
import { WidgetComponent, WidgetSafeHTMLPipe, DynamicWidgetDirective } from './widget.component';

export { WidgetsComponent } from './widgets.component'

export interface WidgetOptions {
  widgets_url?:string
  components?: {
    // selector: components
  }
}

export let WidgetMap:any = {
    // for each dynamic component
    //'app-hello': HelloComponent
};

@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [
    WidgetsComponent, WidgetComponent, DynamicWidgetDirective, WidgetSafeHTMLPipe
  ],
  exports: [
    WidgetsComponent
  ]
})
export class WidgetsModule {

    private static widgets_url = null;

    static setOptions(opts: WidgetOptions) {

        this.widgets_url = opts.widgets_url;
        for (var selector in opts.components) {
            if (opts.components[selector]) {
              WidgetMap[selector] = opts.components[selector];
            }
        }
        return this;
    };

    static getWidgetsURL():string {

      return this.widgets_url;
    };
}
