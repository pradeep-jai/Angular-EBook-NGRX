import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookListingComponent } from './components/book-listing/book-listing.component';
import { MaterialModule } from '../shared/material.module';
import { BookDetailsComponent } from './components/book-details/book-details.component';
import { MaterialElevationDirective } from '../material-elevation.directive';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BillingDetailsComponent } from './components/billing-details/billing-details.component';
import { FormsModule }   from '@angular/forms';



@NgModule({
  declarations: [BookListingComponent, BookDetailsComponent, MaterialElevationDirective, BillingDetailsComponent],
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule
  ]
})
export class SearchBookModule { }
