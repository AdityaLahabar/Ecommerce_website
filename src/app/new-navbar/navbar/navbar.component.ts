import { Component, computed, inject } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../../cart.service';
import { OrderSummaryComponent } from '../../cart/order-summary/order-summary.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [OrderSummaryComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

   router=inject(Router);
    loggedUserData:string='Admin';
  
  
    cartService = inject(CartService);
    cartLabel = computed(() => ` (${this.cartService.cart().length})`);
  
    onCart(){
      this.router.navigateByUrl('cart');
    }

    onStore(){
      this.router.navigateByUrl('Products');
    }
    value=this.cartService.total;
    
}
