import { Component } from '@angular/core';
import { slidePageAnimation } from '../animations/slide.page.animation';

@Component({
  selector: 'app-the-gallery',
  standalone: false,
  templateUrl: './the-gallery.component.html',
  styleUrl: './the-gallery.component.scss',
  animations: [slidePageAnimation],
})
export class TheGalleryComponent {}
