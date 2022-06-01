import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdopcionesService } from 'src/app/core/services/adopciones/adopciones.service';

@Component({
  selector: 'app-ex-solovinos',
  templateUrl: './ex-solovinos.component.html',
  styleUrls: ['./ex-solovinos.component.css']
})
export class ExSolovinosComponent implements OnInit {

    adoptionsFromServer:any= []
    exsolovinos:any=[]
  constructor(
    private adopcionesService:AdopcionesService,
    private router:Router
   
  ) { }

  ngOnInit(): void {
    this.adopcionesService.getAllAdoptions()
    .subscribe(res=>{
      this.adoptionsFromServer=res
      this.saveExsolovinos(this.adoptionsFromServer)
    })
  }

  saveExsolovinos(adopciones:Array<any>){
    let aux=0;
    for (let index = 0; index < adopciones.length; index++) {
     if ((adopciones[index]['is_exsolovino'] == true) && (adopciones[index]['sterulization_pet'] == true)) {
        
        this.exsolovinos[aux]=adopciones[index] 
        aux++
        
        
        
     }
      
    }
    
   
    
    
  }

  deletedExsolovino(id:string){
    if (confirm("¿Desea eliminar este elemento?")) {
      this.adopcionesService.deleteAdoption(id).subscribe(res=>{
        location.reload()
      })
    }
   
  }

}
