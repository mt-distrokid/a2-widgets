# Angular 2; flex widgets

## Installation
You can add a2-widgets to your project using npm;
```
npm install a2-widgets --save
```

## Configuration

1. Create a json file that defines your widgets. Example widget definitions json file;
    ```
                {
                    "widgets": [
                        {
                                "title": "Widget HTML",
                                "html": "<b>This is some static HTML...</b>"
                        }, 
                        {
                                "title": "Widget Component",
                                "component": "app-hello",
                                "style": {
                                        "height": "400px"
                                }
                        }, 
                        {
                                "title": "Widget iFrame",
                                "url": "https://weather.com/",
                                "classes": ["unpadded"]
                        }
                   ]
                }
    ```

    Note: The contents of the json file are ignored except for the **widgets** array which is mapped to this interface;
    ```
	export interface WidgetInterface {
	    id?:string;         // unique id automatically assigned
	    title?: string;     // title of widget
	    html?: string;      // html to be rendered
	    url?: string;       // url to be iframed
	    component?: string; // component selector
	    classes?: string[]; // array of class names
	    style?: any;        // style object, e.g. {"prop1": "value", "prop2": "value", ... "propN": "value"}
	};
    ```


2. Add the **WidgetsModule** to your app module. 

    In this example, one widget will render the HelloComponent, 
    so the HelloComponent is added to the **components** section of the WidgetsModule's options 
    and to the **entryComponents** array.

    ```
        Import { WidgetsModule } "../node_modules/a2-widgets/widgets.module";

        @NgModule({
        imports: [
            ...
            WidgetsModule.setOptions({ 
                widgets_url: "./app/resources/data/custom.json",
                components: {
                    'app-hello': HelloComponent
                }
            }),
            ...
            ],
            entryComponents: [
              HelloComponent
            ],
            ...
            bootstrap: [AppComponent]
	})
    ```

3. If you are using routes, add the **widgets.component** to your route table. Otherwise use 

    ```
        <app-widgets></app-widgets>
    ```

## Example
<img src="https://raw.githubusercontent.com/mt1955/a2-widgets/master/man/example.png" />
