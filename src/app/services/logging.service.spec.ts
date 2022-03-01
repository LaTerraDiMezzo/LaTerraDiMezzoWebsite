import { TestBed } from '@angular/core/testing';

import { LoggingService } from './logging.service';

describe('LoggingService', () => {
  let service: LoggingService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        LoggingService,
        {
          provide: 'LoggingSource',
          useValue: 'Test Log'
        }
      ]
    });
    service = TestBed.inject(LoggingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('#debug should log informations with level DEBUG', () => {
    expect(service.debug('Test message', 'Karma #debug test')).toBe(true);
  });

  it('#info should log informations with level INFO', () => {
    expect(service.info('Test message', 'Karma #info test')).toBe(true);
  });
  
  it('#warn should log informations with level WARNING', () => {
    expect(service.warn('Test message', 'Karma #warn test')).toBe(true);
  });
  
  it('#error should log informations with level ERROR', () => {
    expect(service.error('Test message', 'Karma #error test')).toBe(true);
  });
});
