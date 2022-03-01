import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Informations } from '../data/informations';
import { LoggingService } from '../services/logging.service';

@Component({
  selector: 'tdm-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss'],
  providers: [
    LoggingService,
    {
      provide: 'LoggingSource',
      useValue: 'Error Component'
    }
  ]
})
export class ErrorComponent implements OnInit {

  constructor(
    private logging: LoggingService,
    private title: Title
  ) {
    // Empty for now
  }

  ngOnInit(): void {
    this.logging.debug('Initialized component.', 'ngOnInit');
    this.title.setTitle(Informations.Name + ' - ' + $localize`:Error page title@@ErrorPageHTMLTitle:Error 404`);
    this.logging.debug('Page title changed.', 'ngOnInit');
  }

}
