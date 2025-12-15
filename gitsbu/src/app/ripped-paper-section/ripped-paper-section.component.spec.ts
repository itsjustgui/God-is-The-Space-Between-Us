import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RippedPaperSectionComponent } from './ripped-paper-section.component';

describe('RippedPaperSectionComponent', () => {
  let component: RippedPaperSectionComponent;
  let fixture: ComponentFixture<RippedPaperSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RippedPaperSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RippedPaperSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
