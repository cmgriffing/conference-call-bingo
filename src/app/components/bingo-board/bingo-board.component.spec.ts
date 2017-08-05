import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BingoBoardComponent } from './bingo-board.component';

describe('BingoBoardComponent', () => {
  let component: BingoBoardComponent;
  let fixture: ComponentFixture<BingoBoardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BingoBoardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BingoBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
