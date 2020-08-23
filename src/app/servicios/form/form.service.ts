import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import {Producto} from '../../componentes/modelo/Producto';
@Injectable({
  providedIn: 'root'
})
export class FormService {

  @Injectable({
    providedIn: 'root'
  })

    
    urlGuardarProducto = '/api/productos/save';
    urlConsultarProducto = '/api/productos/consultar';
    urlEliminarProducto= '/api/productos/eliminar/';




  constructor(protected http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
       'Accept': 'application/json'
    })
  }

 guardarProducto(productos){
  return this.http.post(this.urlGuardarProducto,productos,this.httpOptions);
 }

 
 obtenerProductos(): Observable<Producto[]>{
  return this.http.get<Producto[]>(this.urlConsultarProducto);
}

eliminarDatos(idProducto: number){
  return this.http.delete(this.urlEliminarProducto+idProducto, this.httpOptions);
}


}