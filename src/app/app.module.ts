import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { CardComponent } from './card/card.component';
import { HttpClientModule} from '@angular/common/http';
import { UsrInfoComponent } from './usr-info/usr-info.component'

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    CardComponent,
    UsrInfoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
