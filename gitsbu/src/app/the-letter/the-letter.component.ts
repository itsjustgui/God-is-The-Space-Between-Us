import { Component } from '@angular/core';
import { slidePageAnimation } from '../animations/slide.page.animation';

@Component({
  selector: 'app-the-letter',
  standalone: false,
  templateUrl: './the-letter.component.html',
  styleUrl: './the-letter.component.scss',
  animations: [slidePageAnimation],
})
export class TheLetterComponent {}
