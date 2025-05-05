import { CurrencyPipe, NgIf } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductsService } from './services/products.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NgIf, CurrencyPipe],
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'products';

  productService = inject(ProductsService, { optional: true, skipSelf: true });

 

  reloadUsers() {
    this.productService?.reloadUsers()
  }
}
