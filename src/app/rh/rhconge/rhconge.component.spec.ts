import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RhcongeComponent } from './rhconge.component';

describe('RhcongeComponent', () => {
  let component: RhcongeComponent;
  let fixture: ComponentFixture<RhcongeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RhcongeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RhcongeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
