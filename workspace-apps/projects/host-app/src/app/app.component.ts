import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Route, Router, RouterLink, RouterOutlet } from '@angular/router';
import { ProductsService } from 'projects/products/src/app/services';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, FormsModule],
  templateUrl: './app.component.html'
})
export class AppComponent {
  searchTerm: string = '';
  productService: ProductsService | null = inject(ProductsService, { optional: true, skipSelf: true });
  router: Router = inject(Router);
  onSearchChange(term: string) {
    this.productService?.searchProducts(term, this.router.url);
  }
}
