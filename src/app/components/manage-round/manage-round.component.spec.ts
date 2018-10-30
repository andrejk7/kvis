import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageRoundComponent } from './manage-round.component';

describe('ManageRoundComponent', () => {
  let component: ManageRoundComponent;
  let fixture: ComponentFixture<ManageRoundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageRoundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageRoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
