import { Injectable } from '@angular/core';
//import da requisição
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  usuarios: any = [];


  constructor(private httpzao: HttpClient) { }

  getUsuarios (){
    return this.httpzao.get ('https://jsonplaceholder.typicode.com/users');
  }




}
