import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewQuizFormComponent } from './new-quiz-form.component';

describe('NewQuizFormComponent', () => {
  let component: NewQuizFormComponent;
  let fixture: ComponentFixture<NewQuizFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewQuizFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewQuizFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
