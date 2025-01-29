import { Component, computed, inject } from '@angular/core';
import { CartService } from '../../cart.service';
import { PrimaryButtonComponent } from '../../primary-button/primary-button.component';
import { HeaderComponent } from '../../header/header.component';

@Component({
  selector: 'app-order-summary',
  standalone: true,
  imports: [PrimaryButtonComponent,HeaderComponent],
  templateUrl: './order-summary.component.html',
  styleUrl: './order-summary.component.scss'
})
export class OrderSummaryComponent {
  cartService = inject(CartService);

  // total = computed(() => {
  //   let total = 0;
  //   for (const item of this.cartService.cart()) {
  //     total += item.price;
  //   }

  //   return total;
  // });
   value=this.cartService.total;
}
