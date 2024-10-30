import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SuscribersComponent } from "../../components/pagina-principal/suscribers/suscribers.component";

@Component({
  selector: 'app-doctor-detalles',
  standalone: true,
  imports: [RouterModule, SuscribersComponent],
  templateUrl: './doctor-detalles.component.html',
  styleUrl: './doctor-detalles.component.css'
})
export class DoctorDetallesComponent implements OnInit  {
  ngOnInit(): void {
    window.scrollTo(0, 0);
  }
}
