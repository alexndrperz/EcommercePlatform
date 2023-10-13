import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import jwtDecode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class ApiConnectService  {

  constructor(private _http:HttpClient) { }

  host = "http://127.0.0.1:8000/"

  decodeCookie() {
    const token = sessionStorage.getItem('tkn')
    if(token) {
      return jwtDecode(token)
    }
    else {
      return {}
    } 
  }

  getNormalData(nombre:string) {
   return this._http.get(`http://127.0.0.1:8000/mensaje/${nombre}`)
  }

  getSecure(path:string) {
   return this._http.get(`${this.host}${path}`)
  }

  postSecure(path:string, data:any) {
    return this._http.post(`${this.host}${path}`, data)
  }

  post(path:string, data:any) {
    return this._http.post(`${this.host}${path}`, data)
  }

  putSecure(path:string, data:any) {
    return this._http.put(`${this.host}${path}`, data)
  }

  deleteSecure(path:string) {
    return this._http.delete(`${this.host}${path}`)
  }
}
