import { Component, OnInit } from '@angular/core';
import { Sneaker } from '../../modelos/sneakers';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {

@Input() sneaker: Sneaker;

  constructor() { }

  ngOnInit() {

  }

}
