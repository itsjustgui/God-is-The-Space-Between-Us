import { ChangeDetectorRef, Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-scroll-fab',
  standalone: false,
  templateUrl: './scroll-fab.component.html',
  styleUrl: './scroll-fab.component.scss',
})
export class ScrollFabComponent {
  isVisible = true;

  constructor(private cdr: ChangeDetectorRef) {}
  // Listen for the window scroll event
  @HostListener('window:scroll', [])
  onWindowScroll() {
    // Calculate scroll position relative to the bottom of the page
    const windowHeight = window.innerHeight;
    const scrollY = window.scrollY;
    const documentHeight = document.documentElement.scrollHeight;

    // We consider the user "at the bottom" when the viewport + scroll position
    // equals or exceeds the total document height (minus a small tolerance, 5px)
    const isAtBottom = windowHeight + scrollY >= documentHeight - 5;

    const shouldBeVisible = !isAtBottom;

    if (this.isVisible !== shouldBeVisible) {
      this.isVisible = shouldBeVisible;

      this.cdr.detectChanges();
    }
  }
}
