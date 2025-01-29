import { Component, inject } from '@angular/core';
import { CartService } from '../../cart.service';
import { CartItemComponent } from '../cart-item/cart-item.component';
import { OrderSummaryComponent } from '../order-summary/order-summary.component';
import { HeaderComponent } from '../../header/header.component';
import { NavbarComponent } from '../../new-navbar/navbar/navbar.component';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CartItemComponent, OrderSummaryComponent,HeaderComponent,NavbarComponent],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent {
  cartService = inject(CartService);
}
