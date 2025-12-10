import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TheGalleryComponent } from './the-gallery.component';

describe('TheGalleryComponent', () => {
  let component: TheGalleryComponent;
  let fixture: ComponentFixture<TheGalleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TheGalleryComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TheGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
