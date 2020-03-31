import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { JwPaginationComponent } from 'jw-angular-pagination';

import { CreateComponent } from './components/Create/create.component';
import { ListComponent } from './components/list/list.component';

const routes = [
  { path: 'posts', component: ListComponent },
  { path: 'posts/create', component: CreateComponent }
];

@NgModule({
  declarations: [ListComponent, CreateComponent, JwPaginationComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forChild(routes)
  ],
  providers: [],
  exports: []
})
export class PostsModule {}
