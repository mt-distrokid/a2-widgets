import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule }   from '@angular/router';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import 'rxjs/add/operator/toPromise';

import { WidgetsModule, WidgetsComponent } from 'a2-widgets/widgets.module' // to implement widgets

import { AppComponent } from './app.component';

import { HelloComponent } from './hello/hello.component';


export const appCentral = {
    routeTable: [
        {path: 'hello', component: HelloComponent},
        {path: '', component: WidgetsComponent}, {path: '**', component: WidgetsComponent} // default
    ]
};

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    WidgetsModule.setOptions(
      { 
        widgets_url: "./app/resources/data/widgets.json",
        components: {
          'app-hello': HelloComponent
        }
      }
    ),
    RouterModule.forRoot(appCentral.routeTable, {useHash: true}),
  ],
  declarations: [
    AppComponent,
    HelloComponent
  ],
  providers: [],
  entryComponents: [
    HelloComponent
  ],
  bootstrap: [AppComponent]
})

export class AppModule {}
