import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AdopcionesService } from 'src/app/core/services/adopciones/adopciones.service';

interface HtmlInputEvent extends Event{
  target: HTMLInputElement & EventTarget
}

@Component({
  selector: 'app-create-adopcions',
  templateUrl: './create-adopcions.component.html',
  styleUrls: ['./create-adopcions.component.css']
})
export class CreateAdopcionsComponent implements OnInit {

  adoptionFromServer: any = []
  sex_options : Array<string> = ['Macho', 'Hembra']
  sterilization_options : Array<string> = ['Si', 'No']
  exsolovino_options : Array<string> = ['Si', 'No']
  constructor(
    private adoptionServices:AdopcionesService,
    private router:Router,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
  }

  createAdoptionForm= this.formBuilder.group(
    {
      name_pet: this.formBuilder.control(''),
      age_pet: this.formBuilder.control(''),
      race_pet: this.formBuilder.control(''),
      sex_pet: this.formBuilder.control(''),
      description_pet: this.formBuilder.control(''),
      sterulization_pet: this.formBuilder.control(''),
      is_exsolovino: this.formBuilder.control('')
    }
  )

  saveAdoption(sexo:HTMLSelectElement, exsolovino:HTMLSelectElement,sterilization:HTMLSelectElement){
    this.setControlSexCorrectValue(sexo)
    this.setControlSterilizationCorrectValue(sterilization)
    this.setControlIsExsolovinoCorrectValue(exsolovino)
    console.log(this.createAdoptionForm.value);
    const adoption = this.createAdoptionForm.value
    this.adoptionServices.createAdoption(adoption)
    .subscribe(res=>{
      this.router.navigate(['/admin/list-adoption'])
    })
    
  }
  setControlSexCorrectValue(value:HTMLSelectElement){
    this.createAdoptionForm.controls['sex_pet'].setValue(value.value)
  }

  setControlIsExsolovinoCorrectValue(value:HTMLSelectElement){
    if (value.value == 'Si') {
      this.createAdoptionForm.controls['is_exsolovino'].setValue(true)
      
    } else{
      this.createAdoptionForm.controls['is_exsolovino'].setValue(false)
    }

   
  }

  setControlSterilizationCorrectValue(value:HTMLSelectElement){
    if (value.value == 'Si') {
      this.createAdoptionForm.controls['sterulization_pet'].setValue(true)
      
    } else{
      this.createAdoptionForm.controls['sterulization_pet'].setValue(false)
    }

   
  }

  
}
