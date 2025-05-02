import { NgIf } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductsService } from './services/products.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,  NgIf],
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'products';

  productService= inject(ProductsService)

  ngOnInit() {
   // this.productService.userResource.load({request: {sort: 'asc'}})
  }

  reloadUsers() {
    this.productService.reloadUsers()
  }
}
