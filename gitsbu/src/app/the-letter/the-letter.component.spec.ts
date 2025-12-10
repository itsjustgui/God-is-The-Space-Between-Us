import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TheLetterComponent } from './the-letter.component';

describe('TheLetterComponent', () => {
  let component: TheLetterComponent;
  let fixture: ComponentFixture<TheLetterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TheLetterComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TheLetterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
