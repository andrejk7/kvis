import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CuSeKacimComponent } from './cu-se-kacim.component';

describe('CuSeKacimComponent', () => {
  let component: CuSeKacimComponent;
  let fixture: ComponentFixture<CuSeKacimComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CuSeKacimComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CuSeKacimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
