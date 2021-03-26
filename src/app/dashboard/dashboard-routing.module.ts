import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CartComponent } from '../cart/components/cart/cart.component';
import { MyCollectionsListComponent } from '../my-collections/components/my-collections-list/my-collections-list.component';
import { BillingDetailsComponent } from '../search-book/components/billing-details/billing-details.component';
import { BookDetailsComponent } from '../search-book/components/book-details/book-details.component';
import { BookListingComponent } from '../search-book/components/book-listing/book-listing.component';
import { MainContentComponent } from './components/main-content/main-content.component';
import { DashboardComponent } from './dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children : [
      {
        path : '',
        component : MainContentComponent
      },
      {
        path : 'search',
        component : BookListingComponent
      },
      {
        path : 'cart',
        component : CartComponent
      },
      {
        path : 'my-collections',
        component : MyCollectionsListComponent
      },
      {
        path : 'book-details',
        component : BookDetailsComponent
      },
      {
        path : 'billing-details',
        component : BillingDetailsComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
