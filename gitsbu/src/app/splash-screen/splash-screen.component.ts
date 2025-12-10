import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-splash-screen',
  standalone: false,
  templateUrl: './splash-screen.component.html',
  styleUrl: './splash-screen.component.scss',
})
export class SplashScreenComponent {
  @Output() animationDone = new EventEmitter<void>();

  videoEnded() {
    this.animationDone.emit();
  }
}
