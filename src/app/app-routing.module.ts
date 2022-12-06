import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LanimalComponent } from './animal/lanimal/lanimal.component';
import { BuscaranimalComponent } from './animaldos/buscaranimal/buscaranimal.component';
import { ListempComponent } from './empleado/listemp/listemp.component';
import { ListhorasComponent } from './horas/listhoras/listhoras.component';
import { InicioComponent } from './login/inicio/inicio.component';
import { MenuComponent } from './menu/menu/menu.component';
import { ListproceComponent } from './procedimiento/listproce/listproce.component';

const routes: Routes = [

  {
    path:'lanimal',
    component:LanimalComponent

  },
  {
    path:'menu',
    component:MenuComponent
  },
  {
    path:'buscar',
    component:BuscaranimalComponent
  },
  {
    path:'procedimiento',
    component:ListproceComponent
  },
  {
    path:'empleado',
    component:ListempComponent
  },
  {
    path:'',
    component:InicioComponent
  },
  {
    path:'reserva',
    component:ListhorasComponent
  }
  


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
