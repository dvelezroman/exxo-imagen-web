import { ServiciosComponent } from './pages/servicios/servicios.component';
import { ContactComponent } from './pages/contact/contact.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { AppointmentComponent } from './pages/appointment/appointment.component';
import { Routes } from '@angular/router';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { HomeComponent } from './pages/home/home.component';
import { ServicioDetallesComponent } from './pages/servicio-detalles/servicio-detalles.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'about-us', component: AboutUsComponent },
    { path: 'appointment', component: AppointmentComponent },
    { path: 'gallery', component: GalleryComponent},
    { path: 'contact', component: ContactComponent},
    { path: 'servicios', component: ServiciosComponent},
    { path: 'servicio-detalles', component: ServicioDetallesComponent},
    
];
