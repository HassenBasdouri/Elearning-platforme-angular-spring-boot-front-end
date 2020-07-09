import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NSalleComponent } from './nsalle.component';

describe('NSalleComponent', () => {
  let component: NSalleComponent;
  let fixture: ComponentFixture<NSalleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NSalleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NSalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
