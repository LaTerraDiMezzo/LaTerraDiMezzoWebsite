import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Informations } from '../data/informations';
import { LoggingService } from '../services/logging.service';

@Component({
  selector: 'tdm-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [
    LoggingService,
    {
      provide: 'LoggingSource',
      useValue: 'Home Component'
    }
  ]
})
export class HomeComponent implements OnInit {

  constructor(
    private logging: LoggingService,
    private title: Title
  ) {
    // Empty for now
  }

  informations = Informations;

  ngOnInit(): void {
    this.logging.debug('Initialized component.', 'ngOnInit');
    this.title.setTitle(Informations.Name + ' - ' + $localize`:Home page title@@HomePageHTMLTitle:Home`);
    this.logging.debug('Page title changed.', 'ngOnInit');
  }

}
