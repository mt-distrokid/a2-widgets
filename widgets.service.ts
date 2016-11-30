import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';

import { WidgetInterface } from './widget.interface';

@Injectable()
export class WidgetsService {

    constructor(private http: Http) {}

    fetchWidgets(url: string) {
        
        return this.http.get(url)
            .toPromise()
            .then(res => <WidgetInterface[]> res.json().data)
            .then(data => { return data; });
    }
}
