import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmptyComponent } from './components/empty/empty.component';

export const routes: Routes = [
  {
    path: 'posts',
    loadChildren: './modules/posts/posts.module#PostsModule'
  },
  { path: '', redirectTo: 'posts', pathMatch: 'full' },
  { path: 'notFound', component: EmptyComponent },
  { path: '**', redirectTo: 'notFound' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  declarations: [EmptyComponent],
  providers: [],
  exports: [RouterModule]
})
export class AppRoutingModule {}
