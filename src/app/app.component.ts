import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./components/navbar/navbar.component";
import { HeroCarruselComponent } from "./components/pagina-principal/hero-carrusel/hero-carrusel.component";
import { AboutComponent } from "./components/pagina-principal/about/about.component";
import { AnuncioComponent } from "./components/pagina-principal/anuncio/anuncio.component";
import { WhyChooseUsComponent } from "./components/pagina-principal/why-choose-us/why-choose-us.component";
import { ServiciosComponent } from "./components/pagina-principal/servicios/servicios.component";
import { BestDoctorComponent } from "./components/pagina-principal/best-doctor/best-doctor.component";
import { PacienteOpinionComponent } from "./components/pagina-principal/paciente-opinion/paciente-opinion.component";
import { BlogsComponent } from "./components/pagina-principal/blogs/blogs.component";
import { FooterComponent } from "./components/footer/footer.component";
import { HomeComponent } from "./pages/home/home.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, 
    NavbarComponent, 
    HeroCarruselComponent, 
    AboutComponent, 
    AnuncioComponent, 
    WhyChooseUsComponent, 
    ServiciosComponent, 
    BestDoctorComponent, 
    PacienteOpinionComponent, 
    BlogsComponent, 
    FooterComponent, 
    HomeComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'web-medic';
}
