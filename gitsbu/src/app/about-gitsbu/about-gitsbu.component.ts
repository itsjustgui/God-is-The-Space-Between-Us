import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-gitsbu',
  standalone: false,
  templateUrl: './about-gitsbu.component.html',
  styleUrl: './about-gitsbu.component.scss',
})
export class AboutGitsbuComponent implements OnInit {
  targetCrochet = 25;
  targetEditing = 67;
  targetCoding = 184;

  // Display values
  crochetHours = 0;
  editingHours = 0;
  codingHours = 0;

  ngOnInit(): void {
    this.animateCount('crochetHours', this.targetCrochet);
    this.animateCount('editingHours', this.targetEditing);
    this.animateCount('codingHours', this.targetCoding);
  }

  animateCount(property: 'crochetHours' | 'editingHours' | 'codingHours', target: number) {
    const duration = 5000; // 5 seconds animation
    const stepTime = Math.abs(Math.floor(duration / target));

    const timer = setInterval(() => {
      this[property] += 1;
      if (this[property] >= target) {
        clearInterval(timer);
      }
    }, stepTime);
  }
}
