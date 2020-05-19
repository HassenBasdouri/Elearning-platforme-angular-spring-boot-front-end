import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardRootComponent } from './board-root.component';

describe('BoardRootComponent', () => {
  let component: BoardRootComponent;
  let fixture: ComponentFixture<BoardRootComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoardRootComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoardRootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
