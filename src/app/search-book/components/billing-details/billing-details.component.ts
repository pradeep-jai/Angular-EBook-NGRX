import { Component, OnInit } from '@angular/core';
import { MatDialogRef, MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AlertDialogComponent } from 'src/app/shared/components/alert-dialog/alert-dialog.component';
import { FetchBookDetailsService } from 'src/app/shared/services/fetch-book-details/fetch-book-details.service';
import { NgForm } from '@angular/forms';
import { SideNavComponent } from 'src/app/dashboard/components/side-nav/side-nav.component';



@Component({
  selector: 'app-billing-details',
  templateUrl: './billing-details.component.html',
  styleUrls: ['./billing-details.component.scss']
})
export class BillingDetailsComponent implements OnInit {
  bookDetails : any;
  
  constructor(
    private fetchBookDetailsService: FetchBookDetailsService,
    private dialog: MatDialog,
    private sideNavbar : SideNavComponent
  ) { 
    
  }

  ngOnInit(): void {
  }

  openAlertDialog() {
    const dialogRef = this.dialog.open(AlertDialogComponent,{
      data:{
        message: 'HelloWorld',
        buttonText: {
          cancel: 'Done'
        }
      },
    });
  }

  submit(form: NgForm) {
    console.log("form valuesssssssssssssssssssssssss")
    console.log(form.value);
    this.bookDetails = this.fetchBookDetailsService.getBookDetails();
    this.bookDetails.submitteKey = true;
    const form_input = {
      ...this.bookDetails,
      ...form.value
    }
    
    this.fetchBookDetailsService.setSubmitedBookDetails(form_input);
    this.fetchBookDetailsService.setSubmitedBooksCounts();
    this.openAlertDialog()
    this.sideNavbar.ngOnInit()
  }
}
