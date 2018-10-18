import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizBasicsFormComponent } from './quiz-basics-form.component';

describe('QuizBasicsFormComponent', () => {
  let component: QuizBasicsFormComponent;
  let fixture: ComponentFixture<QuizBasicsFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuizBasicsFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizBasicsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
