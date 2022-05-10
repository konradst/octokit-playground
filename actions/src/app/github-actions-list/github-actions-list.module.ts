import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GithubActionsListComponent } from './github-actions-list.component';

import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    GithubActionsListComponent
  ],
  imports: [
    CommonModule,

    MatTableModule,
    MatToolbarModule,
    MatButtonModule
  ],
  exports: [
    GithubActionsListComponent
  ]
})
export class GithubActionsListModule { }
