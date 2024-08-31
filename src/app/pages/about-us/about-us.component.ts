import { Component } from '@angular/core';
import { PacienteOpinionComponent } from '../../components/pagina-principal/paciente-opinion/paciente-opinion.component';
import { AboutComponent } from '../../components/pagina-principal/about/about.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [
    PacienteOpinionComponent,
    AboutComponent,
    RouterModule
  ],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.css'
})
export class AboutUsComponent {

}
