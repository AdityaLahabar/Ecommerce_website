import { Component, inject, input } from '@angular/core';
import { CartService } from '../../cart.service';
import { Product } from '../product-list/product-list.component';
import { PrimaryButtonComponent } from '../../primary-button/primary-button.component';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [PrimaryButtonComponent],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss'
})
export class ProductCardComponent {
  
  cartService = inject(CartService);

  product = input.required<Product>();
}
