import { Question, PlayableQuestion } from './question';
import { Named } from './named';

export class Topic extends Named {
  questions: Array<Question | PlayableQuestion>;
}
