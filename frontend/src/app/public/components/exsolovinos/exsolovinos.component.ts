import { Component, OnInit } from '@angular/core';
import { AdopcionesService } from 'src/app/core/services/adopciones/adopciones.service';

@Component({
  selector: 'app-exsolovinos',
  templateUrl: './exsolovinos.component.html',
  styleUrls: ['./exsolovinos.component.css']
})
export class ExsolovinosComponent implements OnInit {

  adopcionesGeted:any;
  exSolovinos:any=[];
  cuantitiOfExsolovinos:number = 0;

  constructor(
    private adopcionesService: AdopcionesService
  ) { }

  ngOnInit(): void {
    this.adopcionesService.getAllAdoptions().subscribe(
    res => {
      this.adopcionesGeted = res
      let aux = 0;

      
      for (let index = 0; index < this.adopcionesGeted.length; index++) {
        if((this.adopcionesGeted[index]['is_exsolovino'] == true) && (this.adopcionesGeted[index]['sterulization_pet']==true)){

         
          

          this.exSolovinos[aux] = this.adopcionesGeted[index]
          aux++;

        }

        this.cuantitiOfExsolovinos= this.exSolovinos.length
        console.log(this.cuantitiOfExsolovinos);
     
      }

      console.log(this.exSolovinos);
      
    }

    )
  }

}
