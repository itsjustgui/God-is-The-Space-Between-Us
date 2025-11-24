import { Component, ElementRef, OnInit} from '@angular/core';
import gsap from 'gsap';

@Component({
  selector: 'app-root',
  standalone: false,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {

  showSplash = true;

  ngOnInit() {
    const splashShown = sessionStorage.getItem('splashShown');
    
    if (splashShown) {
      // If they have been here before in this session, skip splash immediately
      //this.showSplash = false;
    }
  }

  onSplashFinished() {
    // Triggered by the child component when video ends
    this.showSplash = false;
    sessionStorage.setItem('splashShown', 'true');
  }
}
