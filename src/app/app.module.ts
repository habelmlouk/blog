import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { RootComponent } from './components/root/root.component';
import { PostListComponent } from './modules/post-list/components/index/post-list.component';

@NgModule({
  declarations: [RootComponent, PostListComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [RootComponent]
})
export class AppModule {}
