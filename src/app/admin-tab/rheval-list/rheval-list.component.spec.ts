import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RhevalListComponent } from './rheval-list.component';

describe('RhevalListComponent', () => {
  let component: RhevalListComponent;
  let fixture: ComponentFixture<RhevalListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RhevalListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RhevalListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
