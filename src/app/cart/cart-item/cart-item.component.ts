import { Component, inject, input } from '@angular/core';
import { Product } from '../../product/product-list/product-list.component';
import { CartService } from '../../cart.service';
import { ButtonComponent } from '../../button/button.component';

@Component({
  selector: 'app-cart-item',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './cart-item.component.html',
  styleUrl: './cart-item.component.scss'
})
export class CartItemComponent {
  item = input.required<Product>();

  cartService = inject(CartService);
}
