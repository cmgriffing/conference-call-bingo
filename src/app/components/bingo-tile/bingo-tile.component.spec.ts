import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BingoTileComponent } from './bingo-tile.component';

describe('BingoTileComponent', () => {
  let component: BingoTileComponent;
  let fixture: ComponentFixture<BingoTileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BingoTileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BingoTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
