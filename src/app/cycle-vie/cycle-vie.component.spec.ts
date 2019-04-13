import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CycleVieComponent } from './cycle-vie.component';

describe('CycleVieComponent', () => {
  let component: CycleVieComponent;
  let fixture: ComponentFixture<CycleVieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CycleVieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CycleVieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
