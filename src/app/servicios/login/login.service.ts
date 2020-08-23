import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import {Usuario} from '../../componentes/modelo/Usuario';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  
  urlValidaUsuario = '/api/usuarios/save';
  urlConsultarUsuario = '/api/usuarios/consultar';
  urlEliminar = '/api/usuarios/eliminar/';
  
  constructor(protected http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
       'Accept': 'application/json'
    })
  }
  validaLogin(login){
    
    return this.http.post(this.urlValidaUsuario,login,this.httpOptions);
 }

 guardarUsuario(usuario){
  return this.http.post(this.urlValidaUsuario,usuario,this.httpOptions);
 }

 obtenerUsuarios(): Observable<Usuario[]>{
  return this.http.get<Usuario[]>(this.urlConsultarUsuario);
}

eliminarDatos(idUser: number){
  return this.http.delete(this.urlEliminar+idUser, this.httpOptions);
}

}
