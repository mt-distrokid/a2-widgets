import {appCentral} from './app.module';

import {ActivatedRoute, Router, 
		NavigationStart, NavigationEnd, NavigationCancel, NavigationError, RoutesRecognized
} from '@angular/router';

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Widgets';

	private sub: any;

	constructor(private router: Router) {}

	ngOnInit() {

		this.sub = this.router.events.subscribe((event:any) => {

      this.title = event.url;
			console.log((new Date), event);
			if (event instanceof NavigationStart) {
				console.log('NavigationStart', event);
			} else if (event instanceof NavigationEnd) {
				console.log('NavigationEnd', event);
			} else if (event instanceof NavigationCancel) {
				console.log('NavigationCancel', event);
			} else if (event instanceof NavigationError) {
				console.log('NavigationError', event);
			} else if (event instanceof RoutesRecognized) {
				console.log('RoutesRecognized', event);
			}
		});
	}

	ngOnDestroy() {

		this.sub.unsubscribe();
	}
}
