import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SuscribersComponent } from "../../components/pagina-principal/suscribers/suscribers.component";

@Component({
  selector: 'app-doctor',
  standalone: true,
  imports: [RouterModule, SuscribersComponent],
  templateUrl: './doctor.component.html',
  styleUrl: './doctor.component.css'
})
export class DoctorComponent {

}
