import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LanimalComponent } from './animal/lanimal/lanimal.component';
import { BuscaranimalComponent } from './animaldos/buscaranimal/buscaranimal.component';
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
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
