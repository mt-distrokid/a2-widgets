import { Component, OnInit, Compiler, ViewContainerRef, ComponentFactoryResolver} from '@angular/core';
import { WidgetComponent } from './widget.component';
import { WidgetInterface } from './widget.interface';
import { WidgetsService } from './widgets.service'
import { WidgetsModule } from './widgets.module'

@Component({
  selector: 'app-widgets',
  templateUrl: './widgets.component.html',
  styleUrls: ['./widgets.component.css'],
  providers: [WidgetsService]
})
export class WidgetsComponent implements OnInit {

  widgets: Array<WidgetComponent> = [];
  widgets_options: Array<WidgetInterface> = []; 
   
  constructor(
    private _widgetsService: WidgetsService, 
    private _compiler:Compiler, 
    private _viewContainerRef:ViewContainerRef,
    private _componentFactoryResolver: ComponentFactoryResolver
  ) {};

  ngOnInit() {

    this._widgetsService.fetchWidgets(WidgetsModule.getWidgetsURL()).then(widget_options => {

      this.widgets_options = widget_options;
      for (let i in this.widgets_options) {
        this.widgets_options[i].id = i; // set unique id

        if (!(this.widgets_options[i].classes instanceof Array)) { // 
          this.widgets_options[i].classes = []; // make sure we have an array 
        }
        if (this.widgets_options[i].classes.indexOf("widget") < 0) {
          this.widgets_options[i].classes.unshift("widget")  // make sure we have the widget class
        }

        this.widgets.push(new WidgetComponent());
      }
    });
  }
}
