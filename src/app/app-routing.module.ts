import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LanimalComponent } from './animal/lanimal/lanimal.component';
import { MenuComponent } from './menu/menu/menu.component';

const routes: Routes = [

  {
    path:'lanimal',
    component:LanimalComponent

  },
  {
    path:'menu',
    component:MenuComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
