import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { FetchBookDetailsService } from 'src/app/shared/services/fetch-book-details/fetch-book-details.service';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit{
  cart_value : any;
  collection_value : any;
  cart_hidden = false;
  collection_hidden = false;
  mobileQuery: MediaQueryList;

  constructor(
    private fetchBookDetailsService: FetchBookDetailsService,
    changeDetectorRef: ChangeDetectorRef, 
    media: MediaMatcher,
    ) { 
    this.mobileQuery = media.matchMedia('(max-width: 720px)');
    this.mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this.mobileQueryListener);
  }

  private mobileQueryListener: () => void;

  ngOnInit() {
    this.cart_value = this.fetchBookDetailsService.getAddedCartBooksCounts();
    this.collection_value = this.fetchBookDetailsService.getSubmitedBooksCounts();
    this.cart_hidden = this.cart_value === 0 ? true : false;
    this.collection_hidden = this.collection_value === 0 ? true : false;
  }

  clearCartBadge() {
    this.cart_hidden = true;

  }
  clearCollectionBadge() {
    this.collection_hidden = true;
  }
  
  isScreenSmall() {
    return this.mobileQuery.matches
  }

}
