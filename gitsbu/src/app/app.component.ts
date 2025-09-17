import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import gsap from 'gsap';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit, AfterViewInit {

  showSplash = true;
  @ViewChild('title') title!: ElementRef;
  @ViewChild('subtitle') subtitle!: ElementRef;

  ngAfterViewInit(): void {
    setTimeout(() => {
      gsap.from(this.title.nativeElement, { duration: 1, y: -50, opacity: 100, ease: 'power2.out' });
      gsap.from(this.subtitle.nativeElement, { duration: 1, y: 50, opacity: 0, ease: 'power2.out', delay: 0.5 });
    }, 4700);
  }
  ngOnInit(): void {
    setTimeout(() => {
      this.showSplash = false;
    }, 4500);
  }
}
