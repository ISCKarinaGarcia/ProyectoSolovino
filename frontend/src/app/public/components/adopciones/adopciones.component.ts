import { Component, OnInit } from '@angular/core';
import { AdopcionesService } from 'src/app/core/services/adopciones/adopciones.service';

@Component({
  selector: 'app-adopciones',
  templateUrl: './adopciones.component.html',
  styleUrls: ['./adopciones.component.css']
})
export class AdopcionesComponent implements OnInit {
  adopciones:any

  constructor(
    private adoptionService:AdopcionesService
  ) { }

  ngOnInit(): void {
    this.adoptionService.getAllAdoptions().subscribe( adoptionsGeted => {

      this.adopciones=adoptionsGeted
      console.log(this.adopciones)

    })

  }

}
