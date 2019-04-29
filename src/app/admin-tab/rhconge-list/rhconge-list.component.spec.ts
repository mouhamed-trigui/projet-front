import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RhcongeListComponent } from './rhconge-list.component';

describe('RhcongeListComponent', () => {
  let component: RhcongeListComponent;
  let fixture: ComponentFixture<RhcongeListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RhcongeListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RhcongeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
