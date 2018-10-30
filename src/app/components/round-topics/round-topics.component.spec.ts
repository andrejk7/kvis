import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoundTopicsComponent } from './round-topics.component';

describe('RoundTopicsComponent', () => {
  let component: RoundTopicsComponent;
  let fixture: ComponentFixture<RoundTopicsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoundTopicsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoundTopicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
