import { Component, computed, inject } from '@angular/core';
import { PrimaryButtonComponent } from '../primary-button/primary-button.component';
import { Router, RouterLink } from '@angular/router';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [PrimaryButtonComponent, RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})



export class HeaderComponent {
  router=inject(Router);
  loggedUserData:string='Admin';


  cartService = inject(CartService);
  cartLabel = computed(() => `Cart (${this.cartService.cart().length})`);

  onStore(){
    this.router.navigateByUrl('Products');
  }
}
