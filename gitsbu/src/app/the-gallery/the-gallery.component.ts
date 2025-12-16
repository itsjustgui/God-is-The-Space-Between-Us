import { Component } from '@angular/core';
import { slidePageAnimation } from '../animations/slide.page.animation';
import { GALLERY_DATA, GalleryItem } from '../gallery.data';

@Component({
  selector: 'app-the-gallery',
  standalone: false,
  templateUrl: './the-gallery.component.html',
  styleUrl: './the-gallery.component.scss',
  animations: [slidePageAnimation],
})
export class TheGalleryComponent {
  gallery = GALLERY_DATA;

  selectedImage: GalleryItem | null = null;

  openPreview(item: GalleryItem) {
    this.selectedImage = item;
    document.body.style.overflow = 'hidden';
  }

  closePreview() {
    this.selectedImage = null;
    document.body.style.overflow = '';
  }

  trackById(_: number, item: GalleryItem) {
    return item.id;
  }
}
