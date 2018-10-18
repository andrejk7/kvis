import { Question } from './question';
import { Named } from './named';

export class Topic extends Named {
  questions: Array<Question>;
}
