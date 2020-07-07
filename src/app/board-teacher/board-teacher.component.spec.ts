import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardTeacherComponent } from './board-teacher.component';

describe('BoardTeacherComponent', () => {
  let component: BoardTeacherComponent;
  let fixture: ComponentFixture<BoardTeacherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoardTeacherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoardTeacherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
