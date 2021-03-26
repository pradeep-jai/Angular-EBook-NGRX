import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyCollectionsListComponent } from './components/my-collections-list/my-collections-list.component';
import { MaterialModule } from '../shared/material.module';



@NgModule({
  declarations: [MyCollectionsListComponent],
  imports: [
    CommonModule,
    MaterialModule
  ]
})
export class MyCollectionsModule { }
