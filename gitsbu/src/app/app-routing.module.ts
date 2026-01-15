import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// IMPORTANT: Replace these placeholder components with your actual component imports.
// You must ensure the file paths match your project structure.
import { HomePageComponent } from './home-page/home-page.component'; // Assuming you have this
import { TheLetterComponent } from './the-letter/the-letter.component'; // Placeholder
import { TheGalleryComponent } from './the-gallery/the-gallery.component'; // Placeholder
import { AboutGitsbuComponent } from './about-gitsbu/about-gitsbu.component';

// Define your routes here
const routes: Routes = [
  // 1. Default Route (Path '')
  // Redirects the base URL (e.g., your-app.com/#/) to the 'home' path.
  { path: '', redirectTo: 'home', pathMatch: 'full' },

  // 2. Your Application Routes
  { path: 'home', component: HomePageComponent },
  { path: 'the-letter', component: TheLetterComponent },
  { path: 'the-gallery', component: TheGalleryComponent },
  { path: 'about-gitsbu', component: AboutGitsbuComponent },
  { path: '**', redirectTo: 'home' },
];

@NgModule({
  // UseHash: true is crucial for making GitHub Pages routing work properly
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
