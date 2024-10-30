import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SuscribersComponent } from "../../components/pagina-principal/suscribers/suscribers.component";

@Component({
  selector: 'app-appointment',
  standalone: true,
  imports: [RouterModule, SuscribersComponent],
  templateUrl: './appointment.component.html',
  styleUrl: './appointment.component.css'
})
export class AppointmentComponent implements OnInit {
  ngOnInit(): void {
    window.scrollTo(0, 0);
  }
}
