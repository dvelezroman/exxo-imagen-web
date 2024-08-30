import { Component } from '@angular/core';
import { FooterComponent } from '../../components/footer/footer.component';
import { BlogsComponent } from '../../components/blogs/blogs.component';
import { PacienteOpinionComponent } from '../../components/paciente-opinion/paciente-opinion.component';
import { BestDoctorComponent } from '../../components/best-doctor/best-doctor.component';
import { ServiciosComponent } from '../../components/servicios/servicios.component';
import { WhyChooseUsComponent } from '../../components/why-choose-us/why-choose-us.component';
import { AnuncioComponent } from '../../components/anuncio/anuncio.component';
import { AboutComponent } from '../../components/about/about.component';
import { HeroCarruselComponent } from '../../components/hero-carrusel/hero-carrusel.component';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ 

    HeroCarruselComponent,
    AboutComponent,
    AnuncioComponent,
    WhyChooseUsComponent,
    ServiciosComponent,
    BestDoctorComponent,
    PacienteOpinionComponent,
    BlogsComponent,
    FooterComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
