import { Component } from '@angular/core';
import { FooterComponent } from '../../components/footer/footer.component';
import { BlogsComponent } from '../../components/pagina-principal/blogs/blogs.component';
import { PacienteOpinionComponent } from '../../components/pagina-principal/paciente-opinion/paciente-opinion.component';
import { BestDoctorComponent } from '../../components/pagina-principal/best-doctor/best-doctor.component';
import { ServiciosComponent } from '../../components/pagina-principal/servicios/servicios.component';
import { WhyChooseUsComponent } from '../../components/pagina-principal/why-choose-us/why-choose-us.component';
import { AnuncioComponent } from '../../components/pagina-principal/anuncio/anuncio.component';
import { AboutComponent } from '../../components/pagina-principal/about/about.component';
import { HeroCarruselComponent } from '../../components/pagina-principal/hero-carrusel/hero-carrusel.component';


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
