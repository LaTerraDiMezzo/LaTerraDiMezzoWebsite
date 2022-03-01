import { Component, OnInit } from '@angular/core';
import { LoggingService } from './services/logging.service';
import { Router, Event as RouterEvent, NavigationStart, NavigationEnd, NavigationCancel, NavigationError, RouterOutlet } from '@angular/router'
import { SlideInAnimation } from './animations/slidein.animation';
import { Informations } from './data/informations';

@Component({
  selector: 'tdm-shell',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [
    LoggingService,
    {
      provide: 'LoggingSource',
      useValue: 'App Component'
    }
  ],
  animations: [
    SlideInAnimation
  ]
})
export class AppComponent implements OnInit {
  constructor(
    public logging: LoggingService,
    private router: Router
  ) {
    this.router.events.subscribe((e: RouterEvent) => {
      this.navigationInterceptor(e);
    });
  }

  loadingopacity: number = 1;

  navigationInterceptor(event: RouterEvent): void {
    if (event instanceof NavigationStart) {
      this.logging.debug('Navigation started.', 'navigationInterceptor');
      this.loadingopacity = 1;
    }

    if (event instanceof NavigationEnd || event instanceof NavigationCancel || event instanceof NavigationError) {
      setTimeout(() => {
        this.logging.debug('Navigation ended.', 'navigationInterceptor');
        this.loadingopacity = 0;
      }, 500);
    }
  }

  prepareRoute(outlet: RouterOutlet) {
    return outlet?.activatedRouteData?.['animation'];
  }

  ngOnInit(): void {
    this.logging.info('Welcome to ' + Informations.Name, 'ngOnInit');
  }
}
