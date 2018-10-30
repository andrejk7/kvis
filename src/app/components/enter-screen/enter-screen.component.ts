import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-enter-screen',
  templateUrl: './enter-screen.component.html',
  styleUrls: ['./enter-screen.component.css']
})
export class EnterScreenComponent {

  constructor(
    private router: Router,
  ) { }

  goToMainPage = () => {
    this.router.navigate(['/main']);
  }

  goToCuSeKacim = () => {
    this.router.navigate(['/cu-se-kacim']);
  }
}
