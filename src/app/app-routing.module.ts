import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './componentes/login/login.component';
import { HomeComponent } from './componentes/home/home.component';
import { ResgistroUsuariosComponent } from './componentes/resgistro-usuarios/resgistro-usuarios.component';
import { UserHomeComponent} from './componentes/user-home/user-home.component';
import { RegistrarProductoComponent } from './componentes/registrar-producto/registrar-producto.component';
import { ProductHomeComponent } from './componentes/product-home/product-home.component';
import { MuestraProductoComponent } from './componentes/muestra-producto/muestra-producto.component';
import { VistaProductoComponent } from './componentes/vista-producto/vista-producto.component'

const routes: Routes = [
  {path : 'login', component: LoginComponent },
  {path : 'home', component: HomeComponent },
  {path : 'registro-usuarios', component: ResgistroUsuariosComponent },
  {path : 'user-home', component: UserHomeComponent},
  {path : 'registrar-producto', component: RegistrarProductoComponent},
  {path : 'product-home', component: ProductHomeComponent},
  {path : 'muestra-producto', component: MuestraProductoComponent},
  {path : 'vista-producto', component: VistaProductoComponent },
  {path : '', redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
