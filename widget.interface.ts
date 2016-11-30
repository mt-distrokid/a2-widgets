export interface WidgetInterface {
    id?:string;         // unique id automatically assigned
    title?: string;     // title of widget
    html?: string;      // html to be rendered
    url?: string;       // url to be iframed
    component?: string; // component selector
    classes?: string[]; // array of class names
    style?: any;        // style object, e.g. {"prop1": "value", "prop2": "value", ... "propN": "value"}
};
