import { Component, OnInit } from '@angular/core';
import { Informations } from '../data/informations';
import { LoggingService } from '../services/logging.service';

@Component({
  selector: 'tdm-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  providers: [
    LoggingService,
    {
      provide: 'LoggingSource',
      useValue: 'Footer Component'
    }
  ]
})
export class FooterComponent implements OnInit {

  constructor(
    private logging: LoggingService
  ) {
    // Empty for now
  }

  informations = Informations;

  ngOnInit(): void {
    this.logging.debug('Initialized component.', 'ngOnInit');
  }

}
