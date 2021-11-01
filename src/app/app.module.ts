import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { routes } from './app-routing.module';
import { NavbarCommonModule } from './commons-components/navbar/navbar.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    NavbarCommonModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
