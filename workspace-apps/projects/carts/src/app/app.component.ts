import { CurrencyPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductsService } from 'projects/products/src/app/services';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CurrencyPipe],
  templateUrl: './app.component.html'
})
export class AppComponent {

  productService: ProductsService | null = inject(ProductsService, { optional: true, skipSelf: true });



}
