import { computed, Injectable, signal } from '@angular/core';
import { Product } from './product/product-list/product-list.component';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cart = signal<Product[]>([]);

  addToCart(product: Product) {
    this.cart.set([...this.cart(), product]);
  }

  removeFromCart(product: Product) {
    this.cart.set(this.cart().filter((p) => p.id !== product.id));
  }

  total = computed(() => {
    let total = 0;
    for (const item of this.cart()) {
      total += item.price;
    }

    return total;
  });
}
