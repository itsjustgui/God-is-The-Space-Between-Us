import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutGitsbuComponent } from './about-gitsbu.component';

describe('AboutGitsbuComponent', () => {
  let component: AboutGitsbuComponent;
  let fixture: ComponentFixture<AboutGitsbuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutGitsbuComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutGitsbuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
