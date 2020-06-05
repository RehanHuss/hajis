import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
    providers: [
        Location, {
            provide: LocationStrategy,
            useClass: PathLocationStrategy
        }
    ]
})
export class HeaderComponent implements OnInit {
    location: any;
    styleContainer: any;

    constructor(
        private router: Router,
        location: Location
    ) { }

    ngOnInit() {
        this.router.events
            .subscribe((event) => {
                if ( event instanceof NavigationEnd ) {
                    this.location = this.router.url;
                    if (this.location === '/') {
                        this.styleContainer = 'container-fluid';
                    } else {
                        this.styleContainer = 'container';
                    }
                }
            });
    }

}
