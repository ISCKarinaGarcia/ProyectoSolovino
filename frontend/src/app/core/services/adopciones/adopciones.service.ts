import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Adoption } from '../../models/adoption';

@Injectable({
  providedIn: 'root'
})
export class AdopcionesService {

  URL= 'http://localhost:4000/adopciones'

  constructor( private http : HttpClient ) { 
  }
  getAllAdoptions(){
    return this.http.get(this.URL)
  }

  getAdoption(id:string){
    return this.http.get(this.URL + '/' + id)
  }

  createAdoption(adoption:Adoption){
    return this.http.post(this.URL,adoption)
  }
  
  deleteAdoption(id:string){
    return  this.http.delete(this.URL + '/' + id)
  
}

  updateAdoption(id:string, adoption:Adoption){
    return this.http.put(this.URL + '/' + id, adoption)
  }
}
