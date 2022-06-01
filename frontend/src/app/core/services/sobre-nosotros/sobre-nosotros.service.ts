import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SobreNosotros } from '../../models/sobre-nosotros';

@Injectable({
  providedIn: 'root'
})
export class SobreNosotrosService {

  URL = "http://localhost:4000/sobre-nosotros"
  constructor(
    private http:HttpClient
  ) { }

  getAllInformation(){

    return this.http.get(this.URL)

  }

  deleteInformation(id:String){

    return this.http.delete( this.URL +"/"+ id )
  }

  createInformation(info:SobreNosotros){
    return this.http.post(this.URL, info)

  }

}
