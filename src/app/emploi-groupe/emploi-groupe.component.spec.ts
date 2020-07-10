import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmploiGroupeComponent } from './emploi-groupe.component';

describe('EmploiGroupeComponent', () => {
  let component: EmploiGroupeComponent;
  let fixture: ComponentFixture<EmploiGroupeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmploiGroupeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmploiGroupeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
