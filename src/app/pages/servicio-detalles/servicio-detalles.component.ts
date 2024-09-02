import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-servicio-detalles',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './servicio-detalles.component.html',
  styleUrl: './servicio-detalles.component.css'
})
export class ServicioDetallesComponent implements OnInit{
  ngOnInit(): void {
    window.scrollTo(0, 0);
  }
}
