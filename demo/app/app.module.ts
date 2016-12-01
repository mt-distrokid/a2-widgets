import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { RouterModule }   from '@angular/router';

import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { WidgetsModule, WidgetsComponent } from '../../node_modules/a2-widgets/widgets.module' // to implement widgets

import { AppComponent } from './app.component';

import 'rxjs/add/operator/toPromise';
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
    RouterModule.forRoot(appCentral.routeTable, { useHash: true }), // TODO: as child routes
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
