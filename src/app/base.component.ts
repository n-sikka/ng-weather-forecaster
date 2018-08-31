import { AfterContentInit, OnInit } from '@angular/core';
import { Event, NavigationCancel, NavigationEnd, NavigationError, NavigationStart } from '@angular/router';

export abstract class BaseComponent implements OnInit, AfterContentInit {
    loading: boolean = false;
    
    // will be required assuming the application is gonna be multilingual
	selectedLanguage: string = 'en';

	constructor() {		
	}

	ngOnInit() {

	}

	ngAfterContentInit() {
		// hide loading
	}

	// Shows and hides the loading spinner during RouterEvent changes
	navigationInterceptor(event: Event): void {
		if (event instanceof NavigationStart) {
			// dummy singletonService.show();
		}
		if (event instanceof NavigationEnd) {
			// dummy singletonService.hide();
			window.scrollTo(0, 0);
		}

		// Set loading state to false in both of the below events to hide the spinner in case a request fails
		if (event instanceof NavigationCancel) {
			// dummy singletonService.hide();
		}
		if (event instanceof NavigationError) {
			// dummy singletonService.hide();
		}
	}
}