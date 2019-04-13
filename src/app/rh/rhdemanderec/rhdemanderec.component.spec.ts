import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RhdemanderecComponent } from './rhdemanderec.component';

describe('RhdemanderecComponent', () => {
  let component: RhdemanderecComponent;
  let fixture: ComponentFixture<RhdemanderecComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RhdemanderecComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RhdemanderecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
