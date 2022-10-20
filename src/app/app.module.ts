import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AnimalModule } from './animal/animal.module';
import { MenuModule } from './menu/menu.module';
import { FormsModule } from '@angular/forms';
import { LanimalComponent } from './animal/lanimal/lanimal.component';

@NgModule({
  declarations: [
    AppComponent,
    LanimalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AnimalModule,
    MenuModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
