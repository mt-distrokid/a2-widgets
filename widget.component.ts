import { Component, Directive, Input } from '@angular/core';
import { WidgetInterface } from './widget.interface';
import { AppModule } from '../app.module';

@Component({
  selector: 'app-widget',
  templateUrl: './widget.component.html',
  styleUrls: ['./widget.component.css']
})
export class WidgetComponent {
  @Input() widget: WidgetInterface = {title: "ANONYMOUS WIDGET"};
}

import {Pipe, PipeTransform} from '@angular/core';
import {DomSanitizer, SafeResourceUrl, SafeUrl} from '@angular/platform-browser';
@Pipe({ name: 'safehtml' })
export class SafeHTMLPipe implements PipeTransform {
  constructor(private _sanitizer: DomSanitizer) {}
  transform(url) {
    return this._sanitizer.bypassSecurityTrustResourceUrl(url);
  }
} 


import {ViewContainerRef,  ComponentFactoryResolver } from '@angular/core';
import { WidgetMap } from './widgets.map';

@Directive({selector: '[dynamicWidget]'})
export class DynamicWidgetDirective {

  @Input('dynamicWidget') selector: string;

  constructor(private _viewContainerRef: ViewContainerRef, private _cmpFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit() {

    if (this.selector) {
        let comp:any = WidgetMap[this.selector] // e.g. 'app-hello'
        if (!comp) {
          console.log('unmapped component specified ' + this.selector);
        } else {
          this._viewContainerRef.createComponent(this._cmpFactoryResolver.resolveComponentFactory(comp), this._viewContainerRef.length);
        } 
     }
  }
}
