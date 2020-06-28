import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';

//prime ng
import {AccordionModule} from 'primeng/accordion'; 



@NgModule({
  declarations: [
    AppComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    BrowserModule,
    AppRoutingModule,

    //primeng
    AccordionModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
