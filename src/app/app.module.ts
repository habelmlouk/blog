import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './components/header/header.component';
import { RootComponent } from './containers/root/root.component';
import { PostsModule } from './modules/posts/posts.module';

registerLocaleData(localeFr, 'fr');

@NgModule({
  declarations: [RootComponent, HeaderComponent],
  imports: [BrowserModule, PostsModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [RootComponent]
})
export class AppModule {}
