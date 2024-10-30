import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SuscribersComponent } from "../../components/pagina-principal/suscribers/suscribers.component";

@Component({
  selector: 'app-servicio-detalles',
  standalone: true,
  imports: [RouterModule, SuscribersComponent],
  templateUrl: './servicio-detalles.component.html',
  styleUrl: './servicio-detalles.component.css'
})
export class ServicioDetallesComponent implements OnInit{
  ngOnInit(): void {
    window.scrollTo(0, 0);
  }
}
