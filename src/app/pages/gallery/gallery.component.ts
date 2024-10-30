import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SuscribersComponent } from "../../components/pagina-principal/suscribers/suscribers.component";
import { PaginationComponent } from "../../components/pagination/pagination.component";

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [RouterModule, SuscribersComponent, PaginationComponent],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.css'
})
export class GalleryComponent {

}
