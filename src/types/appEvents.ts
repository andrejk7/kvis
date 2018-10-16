export class AppEvent {
  type: EventType;
  payload?: any;
}

export class AppSyncEvent extends AppEvent {}

export class AppAsyncEvent extends AppEvent {}

export type EventType = 'saveQuiz' | 'loadQuiz' | 'onQuizLoaded';
