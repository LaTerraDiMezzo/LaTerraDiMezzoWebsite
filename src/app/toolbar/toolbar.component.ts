import { Component, OnInit } from '@angular/core';
import { Informations } from '../data/informations';
import { LoggingService } from '../services/logging.service';

@Component({
  selector: 'tdm-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
  providers: [
    LoggingService,
    {
      provide: 'LoggingSource',
      useValue: 'Toolbar Component'
    }
  ]
})
export class ToolbarComponent implements OnInit {

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
