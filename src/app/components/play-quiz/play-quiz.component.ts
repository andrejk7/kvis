import { Component, OnInit } from '@angular/core';
import { PlayQuizService } from '../../services/playQuizService/play-quiz.service';

@Component({
  selector: 'app-play-quiz',
  templateUrl: './play-quiz.component.html',
  styleUrls: ['./play-quiz.component.css']
})
export class PlayQuizComponent implements OnInit {

  constructor(
    private playQuizService: PlayQuizService,
  ) { }

  ngOnInit() {
  }

}
