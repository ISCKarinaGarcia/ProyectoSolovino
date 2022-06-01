import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SobreNosotrosService } from 'src/app/core/services/sobre-nosotros/sobre-nosotros.service';
import { FormGroup,FormArray,Form, FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {
  infoFromServer:any=[]
  constructor(
    private sobreNosotrosService:SobreNosotrosService,
    private router:Router,
    private formBuilder:FormBuilder
    
  ) { }

  ngOnInit(): void {
    this.sobreNosotrosService.getAllInformation()
    .subscribe(res=>{
      this.infoFromServer=res
      console.log(res);
      
    })
  }

  aboutUsForm= this.formBuilder.group({
    equipo:this.formBuilder.array([
      this.formBuilder.group({
        nombre:this.formBuilder.control(""),
        curriculum:this.formBuilder.control("")
      })
    ]),
    mision:this.formBuilder.control(''),
    vision:this.formBuilder.control('')


  })
}
