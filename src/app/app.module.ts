import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import{HttpClientModule} from "@angular/common/http";
import { BackgroundComponent } from './background/background.component';
import { HeaderComponent } from './header/header.component';
import { MaterialModule } from 'src/shared/material.module';
import { PokemonInfoComponent } from './pokemon-info/pokemon-info.component';
import { AppRoutingModule } from 'src/app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    BackgroundComponent,
    HeaderComponent,
    PokemonInfoComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
