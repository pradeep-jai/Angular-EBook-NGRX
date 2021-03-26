import { Component, OnInit } from '@angular/core';
import { SideNavComponent } from 'src/app/dashboard/components/side-nav/side-nav.component';
import { FetchBookDetailsService } from 'src/app/shared/services/fetch-book-details/fetch-book-details.service';

@Component({
  selector: 'app-my-collections-list',
  templateUrl: './my-collections-list.component.html',
  styleUrls: ['./my-collections-list.component.scss']
})
export class MyCollectionsListComponent implements OnInit {
  submittedBookDetails : any;
  constructor(
    private fetchBookDetailsService: FetchBookDetailsService,
    private sideNavbar : SideNavComponent
  ) { }

  ngOnInit(): void {
    this.submittedBookDetails = this.fetchBookDetailsService.getSubmitedBookDetails();
    this.fetchBookDetailsService.clearSubmittedBooksCounts();
  }

}
