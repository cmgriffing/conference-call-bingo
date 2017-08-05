import { TestBed, inject } from '@angular/core/testing';

import { TileContentService } from './tile-content.service';

describe('TileContentService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TileContentService]
    });
  });

  it('should be created', inject([TileContentService], (service: TileContentService) => {
    expect(service).toBeTruthy();
  }));
});
