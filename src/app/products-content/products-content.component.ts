import { Component, OnInit } from '@angular/core';
import { SneakerService } from '../../services/sneakers.service';
import { Observer } from 'rxjs/Observer';

@Component({
  selector: 'app-products-content',
  templateUrl: './products-content.component.html',
  styleUrls: ['./products-content.component.scss']
})
export class ProductsContentComponent implements OnInit {

  sneakers: any;

  constructor(private sneakerService: SneakerService) { }

  ngOnInit() {
    this.sneakeService.getSneakers().subscribe(response => { this.sneakers = response.sneakers; });
  }

}
