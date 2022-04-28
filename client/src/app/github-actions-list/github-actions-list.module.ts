import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GithubActionsListComponent } from './github-actions-list.component';



@NgModule({
  declarations: [
    GithubActionsListComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    GithubActionsListComponent
  ]
})
export class GithubActionsListModule { }
