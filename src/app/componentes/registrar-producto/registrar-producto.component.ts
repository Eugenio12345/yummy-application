import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import {FormService} from '../../servicios/form/form.service';

@Component({
  selector: 'app-registrar-producto',
  templateUrl: './registrar-producto.component.html',
  styleUrls: ['./registrar-producto.component.css']
})
export class RegistrarProductoComponent implements OnInit {


  registroForm : FormGroup;

  constructor(private patterBuilder: FormBuilder, private router: Router,private formService : FormService) { 
    this.registroForm = this.patterBuilder.group({
      nombre:'',
      precio:''
    })
    
  }
  ngOnInit(): void {
  }
    guardarProducto(producto){
    this.formService.guardarProducto(producto).subscribe(exito=>{
      this.router.navigateByUrl('/product-home')
    }
    ,
    error=>{
      alert('Error en el llenado')
    }
    
    )
    }
  }
