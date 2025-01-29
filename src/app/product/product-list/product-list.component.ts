import { Component, signal } from '@angular/core';
import { ProductCardComponent } from '../product-card/product-card.component';
import { HeaderComponent } from '../../header/header.component';
import { NavbarComponent } from '../../new-navbar/navbar/navbar.component';
export type Product = {
  id: number;
  title: string;
  price: number;
  image: string;
  stock?: number;
};

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [ProductCardComponent,HeaderComponent,NavbarComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})


export class ProductListComponent {

  products = signal<Product[]>([
    {
      "id":1,
      "title":"Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
      "price":109.95,
      "image":"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
      "stock":120
   },
   {
      "id":2,
      "title":"Mens Casual Premium Slim Fit T-Shirts ",
      "price":22.3,
      "image":"https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
      "stock":259
   },
   {
      "id":3,
      "title":"Mens Cotton Jacket",
      "price":55.99,
      "image":"https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
      "stock":0
   },
   {
      "id":4,
      "title":"Mens Casual Slim Fit",
      "price":15.99,
      "image":"https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
      "stock":430
   },
   {
    "id":5,
    "title":"John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
    "price":15.99,
    "image":"https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
    "stock":0
 },
 {
    "id":6,
    "title":"Solid Gold Petite Micropave ",
    "price":168,
    "image":"https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg",
    "stock":70
 },
 {
    "id":7,
    "title":"White Gold Plated Princess",
    "price":9.99,
    "image":"https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg",
    "stock":400
 },
 {
    "id":8,
    "title":"Pierced Owl Rose Gold Plated Stainless Steel Double",
    "price":10.99,
    "image":"https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg",
    "stock":100
 },
 {
    "id":9,
    "title":"WD 2TB Elements Portable External Hard Drive - USB 3.0 ",
    "price":64,
    "image":"https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg",
    "stock":203
 },
 {
    "id":10,
    "title":"SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s",
    "price":109,
    "image":"https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg",
    "stock":470
 },
 {
    "id":11,
    "title":"Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA III 2.5",
    "price":109,
    "image":"https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_.jpg",
    "stock":319
 },
 {
    "id":12,
    "title":"WD 4TB Gaming Drive Works with Playstation 4 Portable External Hard Drive",
    "price":114,
    "image":"https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_.jpg",
    "stock":400
 },
 {
    "id":13,
    "title":"Acer SB220Q bi 21.5 inches Full HD (1920 x 1080) IPS Ultra-Thin",
    "price":599,
    "image":"https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg",
    "stock":250
 },
 {
    "id":14,
    "title":"Samsung 49-Inch CHG90 144Hz Curved Gaming Monitor (LC49HG90DMNXZA) – Super Ultrawide Screen QLED ",
    "price":999.99,
    "image":"https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg",
    "stock":140
 },
 {
    "id":15,
    "title":"BIYLACLESEN Women's 3-in-1 Snowboard Jacket Winter Coats",
    "price":56.99,
    "image":"https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg",
    "stock":235
 },
 {
    "id":16,
    "title":"Lock and Love Women's Removable Hooded Faux Leather Moto Biker Jacket",
    "price":29.95,
    "image":"https://fakestoreapi.com/img/81XH0e8fefL._AC_UY879_.jpg",
    "stock":340
 },
 {
    "id":17,
    "title":"Rain Jacket Women Windbreaker Striped Climbing Raincoats",
    "price":39.99,
    "image":"https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg",
    "stock":679
 },
 {
    "id":18,
    "title":"MBJ Women's Solid Short Sleeve Boat Neck V ",
    "price":9.85,
    "image":"https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_.jpg",
    "stock":130
 },
 {
    "id":19,
    "title":"Opna Women's Short Sleeve Moisture",
    "price":7.95,
    "image":"https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg",
    "stock":146
 },
 {
    "id":20,
    "title":"DANVOUY Womens T Shirt Casual Cotton Short",
    "price":12.99,
    "image":"https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg",
    "stock":145
 }
  ]);
}
