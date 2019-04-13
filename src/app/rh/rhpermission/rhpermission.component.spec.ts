import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RhpermissionComponent } from './rhpermission.component';

describe('RhpermissionComponent', () => {
  let component: RhpermissionComponent;
  let fixture: ComponentFixture<RhpermissionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RhpermissionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RhpermissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
