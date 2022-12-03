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
import { EmpleadoModule } from './empleado/empleado.module';
import { ListempComponent } from './empleado/listemp/listemp.component';
import { LoginModule } from './login/login.module';
import { InicioComponent } from './login/inicio/inicio.component';
import { HorasModule } from './horas/horas.module';
import { ListhorasComponent } from './horas/listhoras/listhoras.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LanimalComponent,
    BuscaranimalComponent,
    ListproceComponent,
    ListempComponent,
    InicioComponent,
    ListhorasComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AnimalModule,
    MenuModule,
    HttpClientModule,
    FormsModule,
    AnimaldosModule,
    ProcedimientoModule,
    EmpleadoModule,
    LoginModule,
    HorasModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
