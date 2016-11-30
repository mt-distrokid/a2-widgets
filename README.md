# a2-widgets
angular2 flex widgets

<pre>
// example widget definitions json file
{
    "data":[
        {"title":"Widget HTML",
         "html": "<b>This is some static HTML...</b>"
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

