# Angular 2; flex widgets

## Installing
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
                                "html": "&lt;b>This is some static HTML...&lt;/b>"
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

    Note: The contents of the json file are mapped to this interface;
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


2. Add the WidgetsModule to app module imports;

    ```
        Import { WidgetsModule } "../node_modules/a2-widgets/widgets.module";

	@NgModule({
	  imports: [
	    ...
	    WidgetsModule.setOptions(
	      { 
       		 widgets_url: "./app/resources/data/custom.json",
       		 components: {
	          'app-hello': HelloComponent
       		 }
      		}
   	    ),
    	    ...
           ],
           entryComponents: [
             HelloComponent
           ],
  	   bootstrap: [AppComponent]
	})
    ```

