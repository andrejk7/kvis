import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewTopicFormComponent } from './new-topic-form.component';

describe('NewTopicFormComponent', () => {
  let component: NewTopicFormComponent;
  let fixture: ComponentFixture<NewTopicFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewTopicFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewTopicFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
