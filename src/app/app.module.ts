import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {AppComponent} from './app.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { HomeComponent } from './home/home.component';
import { ProductsContentComponent } from './products-content/products-content.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductCardComponent,
    ProductsContentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  exports: [
    HomeComponent,
    ProductCardComponent,
    ProductsContentComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
