import { Routes } from '@angular/router';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'about-us', component: AboutUsComponent },
];
