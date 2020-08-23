import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import {LoginService} from '../../servicios/login/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private patterBuilder: FormBuilder, private router: Router,private loginService:LoginService) { 
    this.loginForm = this.patterBuilder.group({
      userName:'',
      password:''
    })
  }

  ngOnInit(): void {
  }

  validaCliente (usuario){
    
  }
}
