import { Topic } from './topic';
import { Named } from './named';

export class Quiz extends Named {
  isStoredOnDisc: boolean;
  topics: Array<Topic>;
}
