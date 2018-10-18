import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageQuizTitleComponent } from './manage-quiz-title.component';

describe('ManageQuizTitleComponent', () => {
  let component: ManageQuizTitleComponent;
  let fixture: ComponentFixture<ManageQuizTitleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageQuizTitleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageQuizTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
