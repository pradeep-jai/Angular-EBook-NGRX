import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CartModule } from './cart/cart.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { MyCollectionsModule } from './my-collections/my-collections.module';
import { BookDetailsComponent } from './search-book/components/book-details/book-details.component';
import { SearchBookModule } from './search-book/search-book.module';

const routes: Routes = [
  {
    path: 'dashboard',
    loadChildren: './dashboard/dashboard.module#DashboardModule',
  },
  {
    path: '**',
    redirectTo: 'dashboard',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [
    RouterModule,
    DashboardModule,
    SearchBookModule,
    CartModule,
    MyCollectionsModule,
  ],
})
export class AppRoutingModule {}
