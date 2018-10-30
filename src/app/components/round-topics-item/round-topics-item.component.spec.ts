import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoundTopicsItemComponent } from './round-topics-item.component';

describe('RoundTopicsItemComponent', () => {
  let component: RoundTopicsItemComponent;
  let fixture: ComponentFixture<RoundTopicsItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoundTopicsItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoundTopicsItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
