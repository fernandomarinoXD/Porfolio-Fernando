import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioSeccionComponent } from './inicio-seccion/inicio-seccion.component';
import { PieComponent } from './pie/pie.component';
import { PorfolioComponent } from './porfolio/porfolio.component';

const routes: Routes = [
  {path:'inicio-seccion', component:InicioSeccionComponent},
  /*{path:'', redirectTo:'inicio-seccion',pathMatch:'full'}*/
  {path:'porfolio', component:PorfolioComponent},
  {path:'pie', component:PieComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
