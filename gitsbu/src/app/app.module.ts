import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { SplashScreenComponent } from './splash-screen/splash-screen.component';
import { HeaderComponent } from './header/header.component';
import { TheGalleryComponent } from './the-gallery/the-gallery.component';
import { TheLetterComponent } from './the-letter/the-letter.component';
import { ScrollFabComponent } from './scroll-fab/scroll-fab.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    SplashScreenComponent,
    HeaderComponent,
    TheGalleryComponent,
    TheLetterComponent,
    ScrollFabComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
