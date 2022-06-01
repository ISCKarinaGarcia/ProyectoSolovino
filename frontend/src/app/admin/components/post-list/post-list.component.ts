import { Component, OnInit } from '@angular/core';
import { PostsService } from 'src/app/core/services/posts/posts.service';



@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  postsFromServer:any=[];


  constructor(
    private postService:PostsService
    
  ) { }

  ngOnInit(): void {
    this.getAllPost()

  }

  deletePost(id:string){
    if(confirm("¿Desea eliminar este elemento?")){
      this.postService.deletePost(id)
      .subscribe(res=>{
        location.reload()
      })
     
    }
   

  }

  getAllPost(){
    this.postService.getAllPosts()
    .subscribe(resFromServer => {
      this.postsFromServer=resFromServer
    })

  }
}
