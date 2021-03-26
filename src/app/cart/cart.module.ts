import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './components/cart/cart.component';
import { MaterialModule } from '../shared/material.module';



@NgModule({
  declarations: [CartComponent],
  imports: [
    CommonModule,
    MaterialModule
  ]
})
export class CartModule { }
