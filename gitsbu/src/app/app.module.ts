import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { SplashScreenComponent } from './splash-screen/splash-screen.component';
import { HeaderComponent } from './header/header.component';
import { TheGalleryComponent } from './the-gallery/the-gallery.component';
import { TheLetterComponent } from './the-letter/the-letter.component';
import { RippedPaperSectionComponent } from './ripped-paper-section/ripped-paper-section.component';
import { ScrollFabComponent } from './scroll-fab/scroll-fab.component';
import { FooterComponent } from './footer/footer.component';
import { ReactiveFormsModule } from '@angular/forms';
import { provideHttpClient } from '@angular/common/http';
import { AboutGitsbuComponent } from './about-gitsbu/about-gitsbu.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    SplashScreenComponent,
    HeaderComponent,
    TheGalleryComponent,
    TheLetterComponent,
    ScrollFabComponent,
    FooterComponent,
    RippedPaperSectionComponent,
    AboutGitsbuComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule, ReactiveFormsModule],
  providers: [provideHttpClient()],
  bootstrap: [AppComponent],
})
export class AppModule {}
