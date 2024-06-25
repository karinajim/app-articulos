import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './commponentes/login/login.component';
import { RegistroComponent } from './commponentes/registro/registro.component';
import { CargarArticuloComponent } from './commponentes/cargar-articulo/cargar-articulo.component';

const routes: Routes = [
 {path:'login',component:LoginComponent},
 {path:'registro',component:RegistroComponent},
 {path:'articulo',component:CargarArticuloComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
