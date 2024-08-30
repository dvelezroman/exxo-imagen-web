import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./components/navbar/navbar.component";
import { HeroCarruselComponent } from "./components/hero-carrusel/hero-carrusel.component";
import { AboutComponent } from "./components/about/about.component";
import { AnuncioComponent } from "./components/anuncio/anuncio.component";
import { WhyChooseUsComponent } from "./components/why-choose-us/why-choose-us.component";
import { ServiciosComponent } from "./components/servicios/servicios.component";
import { BestDoctorComponent } from "./components/best-doctor/best-doctor.component";
import { PacienteOpinionComponent } from "./components/paciente-opinion/paciente-opinion.component";
import { BlogsComponent } from "./components/blogs/blogs.component";
import { FooterComponent } from "./components/footer/footer.component";
import { HomeComponent } from "./pages/home/home.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, HeroCarruselComponent, AboutComponent, AnuncioComponent, WhyChooseUsComponent, ServiciosComponent, BestDoctorComponent, PacienteOpinionComponent, BlogsComponent, FooterComponent, HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'web-medic';
}
