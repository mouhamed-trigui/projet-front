import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RhdemanderecListComponent } from './rhdemanderec-list.component';

describe('RhdemanderecListComponent', () => {
  let component: RhdemanderecListComponent;
  let fixture: ComponentFixture<RhdemanderecListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RhdemanderecListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RhdemanderecListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
