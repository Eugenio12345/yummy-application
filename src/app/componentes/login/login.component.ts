import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import {LoginService} from '../../servicios/login/login.service';
import { Usuario } from '../modelo/Usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  usuario: Usuario;
  constructor(private patterBuilder: FormBuilder, private router: Router,private loginService:LoginService) { 
    this.loginForm = this.patterBuilder.group({
      nombreUsuario:'',
      contrasenna:''
    })
  }

  ngOnInit(): void {
  }

  validaCliente (usuario){
    this.loginService.validaLogin(usuario).subscribe(
     ( any: any[])=>{
         usuario = any;
         this.validaUsuario(usuario);
      }, error=>{
        
      }
    );
  }

  validaUsuario(usuario: Usuario){
     if(usuario.nombreUsuario==null && usuario.contrasenna==null){
      this.router.navigateByUrl('/login')
     }else if(usuario.nombreUsuario!= null && usuario.contrasenna!=null && usuario.rol=='admin'){
         this.router.navigateByUrl('/user-home')
     }else{
      this.router.navigateByUrl('/vista-producto')
     }
  }
}
