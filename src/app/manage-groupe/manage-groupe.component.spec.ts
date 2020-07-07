import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageGroupeComponent } from './manage-groupe.component';

describe('ManageGroupeComponent', () => {
  let component: ManageGroupeComponent;
  let fixture: ComponentFixture<ManageGroupeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageGroupeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageGroupeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
