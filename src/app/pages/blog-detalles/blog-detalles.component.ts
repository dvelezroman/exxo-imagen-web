import { RouterModule } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog-detalles',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './blog-detalles.component.html',
  styleUrl: './blog-detalles.component.css'
})
export class BlogDetallesComponent implements OnInit {
  ngOnInit(): void {
    window.scrollTo(0, 0);
  }
}
