import { Component, OnInit } from '@angular/core';
import { PostsService } from 'src/app/core/services/posts/posts.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';

interface HtmlInputEvent extends Event{
  target: HTMLInputElement & EventTarget
}

@Component({
  selector: 'app-view-post',
  templateUrl: './view-post.component.html',
  styleUrls: ['./view-post.component.css']
})
export class ViewPostComponent implements OnInit {

  sex_option:Array<string> =['Hembra', 'Macho']
  id:string="";
  postFromServer:any=[];
  fileName:string=''
  photoSelected: string | ArrayBuffer | any;

  constructor(

    private activatedRoute:ActivatedRoute,
    private postService:PostsService,
    private formBuilder:FormBuilder,
    private router:Router
      ) {
  
  
   }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe(
      res => {
          this.id = res ['id']
      }
    )
      this.postService.getPost(this.id)
      .subscribe(res => {
        this.postFromServer =res;
        console.log(this.postFromServer);
        
      })

  }

  previewForm = this.formBuilder.group({
    name_pet:[''],
    age_pet:[''],
    race_pet:[''],
    sex_pet:[''],
    description_pet:[''],
    date_disapparence: [''],
    place_disapparence:['']

  })

  updatePetForm = this.formBuilder.group({
    name_pet:[''],
    age_pet:[''],
    race_pet:[''],
    sex_pet:[''],
    description_pet:[''],
    date_disapparence: [''],
    place_disapparence:[''],
    image:['']
  })

    updatePet(sex_pet: HTMLSelectElement){
      console.log(sex_pet.value);
      this.updatePetForm.controls['sex_pet'].setValue(sex_pet.value);
      const newPost = this.updatePetForm.value
      this.postService.updatePost (this.id,newPost)
    .subscribe(res => {
      this.router.navigate(['admin/list-posts'])
      console.log(res);
      
    })

      
    }

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

    
}
