import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { SideNavComponent } from 'src/app/dashboard/components/side-nav/side-nav.component';
import { FetchBookDetailsService } from 'src/app/shared/services/fetch-book-details/fetch-book-details.service';
import { AppState } from 'src/app/store/app.state';
import { getCollectionBooks } from '../../state/collection.selector';

@Component({
  selector: 'app-my-collections-list',
  templateUrl: './my-collections-list.component.html',
  styleUrls: ['./my-collections-list.component.scss'],
})
export class MyCollectionsListComponent implements OnInit {
  submittedBookDetails: any;
  constructor(
    private fetchBookDetailsService: FetchBookDetailsService,
    private sideNavbar: SideNavComponent,
    private store: Store<AppState>
  ) {}

  ngOnInit(): void {
    this.submittedBookDetails = this.store.select(getCollectionBooks);
  }
}
