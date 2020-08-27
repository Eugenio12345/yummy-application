import { Component, OnInit } from '@angular/core';
import { FormService } from 'src/app/servicios/form/form.service';


@Component({
  selector: 'app-vista-producto',
  templateUrl: './vista-producto.component.html',
  styleUrls: ['./vista-producto.component.css']
})
export class VistaProductoComponent implements OnInit {

  public productos = [];

  constructor(private formService : FormService) { }

  ngOnInit(): void {
  
    this.formService.obtenerProductos().subscribe(
      resultado=>{
         this.productos=resultado;
      }, 
      error=>{
        console.log(error);
      }
    );
   
  }
 
}