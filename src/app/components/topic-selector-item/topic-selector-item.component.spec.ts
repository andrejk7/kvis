import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopicSelectorItemComponent } from './topic-selector-item.component';

describe('TopicSelectorItemComponent', () => {
  let component: TopicSelectorItemComponent;
  let fixture: ComponentFixture<TopicSelectorItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopicSelectorItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopicSelectorItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
