import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RhevaluationComponent } from './rhevaluation.component';

describe('RhevaluationComponent', () => {
  let component: RhevaluationComponent;
  let fixture: ComponentFixture<RhevaluationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RhevaluationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RhevaluationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
