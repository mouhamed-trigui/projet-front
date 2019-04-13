import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CycleDeVieListComponent } from './cycle-de-vie-list.component';

describe('CycleDeVieListComponent', () => {
  let component: CycleDeVieListComponent;
  let fixture: ComponentFixture<CycleDeVieListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CycleDeVieListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CycleDeVieListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
