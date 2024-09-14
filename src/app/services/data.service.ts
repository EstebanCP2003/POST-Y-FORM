import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaderResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor( private http: HttpClient ) { }

  // Método GET
  ObtenerDatos(){
    return this.http.get('https://jsonplaceholder.typicode.com/posts');
  }

  // Método POST
  MetaDatos(data:any): Observable<any>{
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.http.post('https://jsonplaceholder.typicode.com/posts', data, {headers});
  }
 
}
