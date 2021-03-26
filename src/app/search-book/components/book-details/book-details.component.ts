import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SideNavComponent } from 'src/app/dashboard/components/side-nav/side-nav.component';
import { FetchBookDetailsService } from 'src/app/shared/services/fetch-book-details/fetch-book-details.service';


@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent implements OnInit {
  bookDetails : any;
  constructor(
    private router:Router,
    private fetchBookDetailsService: FetchBookDetailsService,
    private SideNavComponent : SideNavComponent
  ) { }

  ngOnInit() {
    this.bookDetails = this.fetchBookDetailsService.getBookDetails();
  }

  addToCartClick() {
    this.fetchBookDetailsService.setCartBooks(this.bookDetails);
    this.fetchBookDetailsService.setAddedCartBooksCounts();
    this.router.navigate(['dashboard/search']);
    this.SideNavComponent.ngOnInit();
  }

  buyClick() {
    this.router.navigateByUrl('dashboard/billing-details');
  }

}
