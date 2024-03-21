import { Component, Input } from '@angular/core';
import { VP_BPM } from 'src/beans/VP_BPM';

interface Product {
  name: string;
  image: string;
  price: number;
  inventoryStatus: string;
}
@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
})
export class ProductCardComponent {
  @Input() vp!: VP_BPM;
  layout: string = 'list';



  products: Product[] = [
    {
      name: 'Bamboo Watch',
      image: 'bamboo-watch.jpg',
      price: 65,
      inventoryStatus: 'INSTOCK',
    },
    {
      name: 'Black Watch',
      image: 'black-watch.jpg',
      price: 72,
      inventoryStatus: 'INSTOCK',
    },
    {
      name: 'Blue Band',
      image: 'blue-band.jpg',
      price: 79,
      inventoryStatus: 'OUTOFSTOCK',
    },
    {
      name: 'Blue T-Shirt',
      image: 'blue-t-shirt.jpg',
      price: 29,
      inventoryStatus: 'INSTOCK',
    },
    {
      name: 'Bracelet',
      image: 'bracelet.jpg',
      price: 15,
      inventoryStatus: 'OUTOFSTOCK',
    },
  ];

  
}
