# Angular2 flex widgets

## Installing
You can add a2-widgets to your project using npm;
```
npm install a2-widgets --save
```


<pre>
// example widget definitions json file
{
    "data":[
        {"title":"Widget HTML",
         "html": "&lt;b>This is some static HTML...&lt;/b>"
        },
        {"title":"Widget Component",
         "component": "app-hello",
         "style": {"height": "400px"}
        },
        {"title":"Widget iFrame",
         "url": "https://weather.com/",
         "classes": ["unpadded"]
        }
    ]
}
</pre>

<pre>
// contents of json file get mapped to this interface
export interface WidgetInterface {
    id?:string;         // unique id automatically assigned
    title?: string;     // title of widget
    html?: string;      // html to be rendered
    url?: string;       // url to be iframed
    component?: string; // component selector
    classes?: string[]; // array of class names
    style?: any;        // style object, e.g. {"prop1": "value", "prop2": "value", ... "propN": "value"}
};
</pre>

<pre>
// add dynamic components to widgets.map.ts

import {Component} from '@angular/core';

// for each dynamic component, e.g.
import {HelloComponent} from '../hello/hello.component'

export const WidgetMap:any = {
    // for each dynamic component, e.g.
    'app-hello': HelloComponent
};
</pre>

<pre>
// add dynamic components to app module's entryComponents array

entryComponents:[HelloComponent],
</pre>

