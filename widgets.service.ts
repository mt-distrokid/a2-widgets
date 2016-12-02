import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { WidgetInterface } from './widget.interface';

@Injectable()
export class WidgetsService {

    constructor(private _http: Http) {}

    fetchWidgets(url: string) {
        
        return this._http.get(url)
            .toPromise()
            .then(res => <WidgetInterface[]> res.json().widgets)
            .then(widgets => { return widgets; });
    }
}
