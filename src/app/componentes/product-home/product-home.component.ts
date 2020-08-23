import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormService } from 'src/app/servicios/form/form.service';

@Component({
  selector: 'app-product-home',
  templateUrl: './product-home.component.html',
  styleUrls: ['./product-home.component.css']
})
export class ProductHomeComponent implements OnInit {

  constructor(private formService : FormService, private router: Router){

  }
 
   columnas = ["Id Producto","Nombre  ","Precio", ""];
   public productos = [];
   
 
   ngOnInit() {
     this.formService.obtenerProductos().subscribe(
       resultado=>{
          this.productos=resultado;
       }, 
       error=>{
         console.log(error);
       }
     );
   }
   eliminarDatos(idProducto: number){
     console.log('invocanndo metodo')
     this.formService.eliminarDatos(idProducto).subscribe(
       exito=>{
           console.log('Eliminado con exito')
           this.router.navigate(['/product-home']);
       }, 
       datos=>{
         console.log('Hubo un error')
       }
     );
   
   }
 
 }
 