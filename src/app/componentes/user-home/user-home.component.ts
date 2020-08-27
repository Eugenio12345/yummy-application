import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/servicios/login/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.css']
})
export class UserHomeComponent implements OnInit {

 constructor(private loginService : LoginService, private router: Router){

 }

  columnas = ["Id Usuario","Nombre  ","Apellido","nombre Usuario", ""];
  public usuarios = [];
  

  ngOnInit() {
    this.loginService.obtenerUsuarios().subscribe(
      resultado=>{
         this.usuarios=resultado;
      }, 
      error=>{
        console.log(error);
      }
    );
  }
  eliminarDatos(idUser: number){
    console.log('invocanndo metodo '+idUser)
    this.loginService.eliminarDatos(idUser).subscribe(
      exito=>{
          console.log('Eliminado con exito')
          this.router.navigate(['/user-home']);
      }, 
      datos=>{
        console.log('Hubo un error')
      }
    );
  
  }

}
