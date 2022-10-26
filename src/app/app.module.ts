import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AnimalModule } from './animal/animal.module';
import { MenuModule } from './menu/menu.module';
import { FormsModule } from '@angular/forms';
import { LanimalComponent } from './animal/lanimal/lanimal.component';
import { AnimaldosModule } from './animaldos/animaldos.module';
import { BuscaranimalComponent } from './animaldos/buscaranimal/buscaranimal.component';
import { ProcedimientoModule } from './procedimiento/procedimiento.module';
import { ListproceComponent } from './procedimiento/listproce/listproce.component';

@NgModule({
  declarations: [
    AppComponent,
    LanimalComponent,
    BuscaranimalComponent,
    ListproceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AnimalModule,
    MenuModule,
    HttpClientModule,
    FormsModule,
    AnimaldosModule,
    ProcedimientoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
