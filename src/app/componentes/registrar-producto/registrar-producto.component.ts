import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import {FormService} from '../../servicios/form/form.service';
import { UtileriasService } from 'src/app/utilerias/utilerias.service';


@Component({
  selector: 'app-registrar-producto',
  templateUrl: './registrar-producto.component.html',
  styleUrls: ['./registrar-producto.component.css']
})
export class RegistrarProductoComponent implements OnInit {


  registroForm : FormGroup;
  sellersPermitString: String;
  constructor(private patterBuilder: FormBuilder, private router: Router,private formService : FormService, private utileriasService: UtileriasService) { 
    this.registroForm = this.patterBuilder.group({
      nombre:'',
      precio:'',
      imagenProducto:''
    })
    
  }
  ngOnInit(): void {
  }
    guardarProducto(producto){
      this.sellersPermitString = this.utileriasService.getImage();
      producto.imagenProducto = this.sellersPermitString;
    this.formService.guardarProducto(producto).subscribe(exito=>{
      this.router.navigateByUrl('/product-home')
    }
    ,
    error=>{
      alert('Error en el llenado')
    }
    
    )
    }
    imageChange(image){
      this.utileriasService.imageChangeUtils(image);
      
    }
  }
