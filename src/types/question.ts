import { Ref } from './ref';

export class Question extends Ref {
  points: number;
  bonusPoints?: number;
  question: string;
  bonusQuestion?: string;
  questionImageEncoded?: string;
  answer: string;
  bonusAnswer?: string;
  answerImageEncoded?: string;
}

export class PlayableQuestion extends Question {
  answered: boolean;
}
