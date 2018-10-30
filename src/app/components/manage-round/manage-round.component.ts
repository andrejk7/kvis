import { Component, OnInit } from '@angular/core';
import { Topic } from '../../../types/topic';
import { Round } from '../../../types/round';
import { CurrentQuizService } from '../../services/currentQuizService/current-quiz.service';

@Component({
  selector: 'app-manage-round',
  templateUrl: './manage-round.component.html',
  styleUrls: ['./manage-round.component.css']
})
export class ManageRoundComponent implements OnInit {
  public topics: Array<Topic>;
  public rounds: Array<Round>;

  public selectedTopicsIds: Array<number> = [];

  constructor(
    private currentQuizService: CurrentQuizService,
  ) { }

  ngOnInit() {
    this.topics = this.currentQuizService.getAllTopics();
    this.rounds = this.currentQuizService.getAllRounds();
  }

}
