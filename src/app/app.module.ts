import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './componentes/app/app.component';
import { FormProductsComponent } from './componentes/form-products/form-products.component';
import { LoginComponent } from './componentes/login/login.component';
import { HomeComponent } from './componentes/home/home.component';
import { HeaderTopComponent } from './componentes/header-top/header-top.component';
import {HttpClientModule} from '@angular/common/http';
import { ResgistroUsuariosComponent } from './componentes/resgistro-usuarios/resgistro-usuarios.component';
import { UserHomeComponent } from './componentes/user-home/user-home.component';
import { RegistrarProductoComponent } from './componentes/registrar-producto/registrar-producto.component';
import { ProductHomeComponent } from './componentes/product-home/product-home.component';
import { MuestraProductoComponent } from './componentes/muestra-producto/muestra-producto.component';
import { VistaProductoComponent } from './componentes/vista-producto/vista-producto.component';

@NgModule({
  declarations: [
    AppComponent,
    FormProductsComponent,
    LoginComponent,
    HomeComponent,
    HeaderTopComponent,
    ResgistroUsuariosComponent,
    UserHomeComponent,
    RegistrarProductoComponent,
    ProductHomeComponent,
    MuestraProductoComponent,
    VistaProductoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, 
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
