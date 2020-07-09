import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewGroupeComponent } from './new-groupe.component';

describe('NewGroupeComponent', () => {
  let component: NewGroupeComponent;
  let fixture: ComponentFixture<NewGroupeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewGroupeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewGroupeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
