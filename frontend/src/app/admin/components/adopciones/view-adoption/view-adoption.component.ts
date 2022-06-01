import { Component, OnInit } from '@angular/core';
import { AdopcionesService } from 'src/app/core/services/adopciones/adopciones.service';
import { Params,Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder } from '@angular/forms';

interface HtmlInputEvent extends Event{
  target: HTMLInputElement & EventTarget
}

@Component({
  selector: 'app-view-adoption',
  templateUrl: './view-adoption.component.html',
  styleUrls: ['./view-adoption.component.css']
})
export class ViewAdoptionComponent implements OnInit {

  sex_option:Array<string> =['Hembra', 'Macho']
  id:string=""
  fileName:string=''
  photoSelected: string | ArrayBuffer | any;
  exSolovino:Array<string> = ['Si','No']
  sterilization_options:Array<string> = ['Si','No']
  

  dataFromServer:any=[]
  constructor(
    private adoptionService:AdopcionesService,
    private router:Router,
    private activatedRouter:ActivatedRoute,
    private formBuilder:FormBuilder
  ) { }

  ngOnInit(): void {
    this.activatedRouter.params
    .subscribe(params =>{
      
    
      console.log(params ['id']);
      this.id=params['id']

      this.adoptionService.getAdoption(this.id)
      .subscribe(res=>{
        this.dataFromServer=res
        
      })
      
    })

    
  }

  previewForm = this.formBuilder.group({
    name_pet:[''],
    age_pet:[''],
    race_pet:[''],
    sex_pet:[''],
    description_pet:[''],
    sterulization_pet:[''],
    is_exsolovino:[''],
    image:['']

  })

  updatePetForm = this.formBuilder.group({
    name_pet:[''],
    age_pet:[''],
    race_pet:[''],
    sex_pet:[''],
    description_pet:[''],
    sterulization_pet:[''],
    is_exsolovino:[''],
    image:['']
    
  })

  onPhotoSelected(event: HtmlInputEvent | any) {

    const file:File = event.target.files[0];

    if (file) {
        this.fileName = file.name;
        console.log(this.fileName);
        //Image preview
        const reader = new FileReader();
        reader.onload = e => this.photoSelected = reader.result;
        reader.readAsDataURL(file);
        console.log(file)

    }
}

   updatePet(sex:HTMLSelectElement,exsolovino:HTMLSelectElement,sterilization:HTMLSelectElement){
     this.setControlSexToHerInString(sex)
     this.setControlExsolovinoToBoolean(exsolovino)
     const newAdoption= this.updatePetForm.value
     this.adoptionService.updateAdoption(this.id,newAdoption)

     .subscribe(res =>{
       this.router.navigate(['/admin/list-adoption'])
     })
     
    
     
      
      

   }

   setControlExsolovinoToBoolean(exsolovino:HTMLSelectElement):void{
    let valueOfExsolovino=exsolovino.value
     if( valueOfExsolovino==this.exSolovino[0]){
        this.updatePetForm.controls['is_exsolovino'].setValue(true)
     } else{
       this.updatePetForm.controls['is_exsolovino'].setValue(false)
     }
     
   }

   setControlSexToHerInString(sex:HTMLSelectElement):void{
     this.updatePetForm.controls['sex_pet'].setValue(sex.value)

   }

   setValue(event:HTMLSelectElement|any ){
   this.updatePetForm.controls['sex_pet'].setValue(event.target.value)


   }

   setExsolovinoFromUpdatePetForm(event:HTMLSelectElement|any ){
    this.updatePetForm.controls['is_exsolovino'].setValue(event.target.value)
 
 
    }

    setSterilizationFromUpdatePetForm(event:HTMLSelectElement|any ){
      this.updatePetForm.controls['sterulization_pet'].setValue(event.target.value)
   
   
      }
}
