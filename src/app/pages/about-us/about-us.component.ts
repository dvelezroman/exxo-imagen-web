import { Component } from '@angular/core';
import { PacienteOpinionComponent } from '../../components/pagina-principal/paciente-opinion/paciente-opinion.component';
import { AboutComponent } from '../../components/pagina-principal/about/about.component';
import { RouterModule } from '@angular/router';
import { SuscribersComponent } from "../../components/pagina-principal/suscribers/suscribers.component";

@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [
    PacienteOpinionComponent,
    AboutComponent,
    RouterModule,
    SuscribersComponent
],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.css'
})
export class AboutUsComponent {

}
