import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NMatiereComponent } from './nmatiere.component';

describe('NMatiereComponent', () => {
  let component: NMatiereComponent;
  let fixture: ComponentFixture<NMatiereComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NMatiereComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NMatiereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
