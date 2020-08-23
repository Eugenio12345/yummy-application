import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import {LoginService} from '../../servicios/login/login.service';

@Component({
  selector: 'app-resgistro-usuarios',
  templateUrl: './resgistro-usuarios.component.html',
  styleUrls: ['./resgistro-usuarios.component.css']
})
export class ResgistroUsuariosComponent implements OnInit {

  registroForm : FormGroup;

  constructor(private patterBuilder: FormBuilder, private router: Router,private loginService:LoginService) { 
    this.registroForm = this.patterBuilder.group({
      nombre:'',
      apellidosUsuario:'',
      nombreUsuario:'',
      contrasenna:''
    })
    
  }
  ngOnInit(): void {
  }
    guardarUsuario(usuario){
    this.loginService.guardarUsuario(usuario).subscribe(exito=>{
      this.router.navigateByUrl('/home')
    }
    ,
    error=>{
      alert('Error en el llenado')
    }
    
    )
    }
  }

  

