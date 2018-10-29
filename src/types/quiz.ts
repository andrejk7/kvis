import { Topic } from './topic';
import { Round } from './round';
import { Named } from './named';

export class Quiz extends Named {
  topics: Array<Topic>;
  rounds: Array<Round>;
}
