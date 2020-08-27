import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import {Usuario} from '../../componentes/modelo/Usuario';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  
  urlGlobal = 'http://ws-service-yummy-friendly-roan-fn.cfapps.io';
  urlGuardarUsuario = '/api/usuarios/save';
  urlConsultarUsuario = '/api/usuarios/consultar';
  urlEliminar = '/api/usuarios/eliminar/';
  urlValidarUsuario = '/api/usuarios/valida/existencia';
  constructor(protected http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
       'Accept': 'application/json'
    })
  }
  validaLogin(login){
    
    return this.http.post(this.urlGlobal+this.urlValidarUsuario,login,this.httpOptions);
 }

 guardarUsuario(usuario){
  return this.http.post(this.urlGlobal+this.urlGuardarUsuario,usuario,this.httpOptions);
 }

 obtenerUsuarios(): Observable<Usuario[]>{
  return this.http.get<Usuario[]>(this.urlGlobal+this.urlConsultarUsuario);
}

eliminarDatos(idUser: number){
  return this.http.delete(this.urlGlobal+this.urlEliminar+idUser, this.httpOptions);
}

}
