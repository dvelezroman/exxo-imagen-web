import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SuscribersComponent } from "../../components/pagina-principal/suscribers/suscribers.component";
import { PaginationComponent } from "../../components/pagination/pagination.component";

@Component({
  selector: 'app-servicios',
  standalone: true,
  imports: [RouterModule, SuscribersComponent, PaginationComponent],
  templateUrl: './servicios.component.html',
  styleUrl: './servicios.component.css'
})
export class ServiciosComponent {

}
