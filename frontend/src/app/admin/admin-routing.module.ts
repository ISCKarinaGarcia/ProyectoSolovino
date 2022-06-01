import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SobreNosotrosComponent } from '../public/components/sobre-nosotros/sobre-nosotros.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { AdoptionsListComponent } from './components/adopciones/adoptions-list/adoptions-list.component';
import { CreateAdopcionsComponent } from './components/adopciones/create-adopcions/create-adopcions.component';
import { ViewAdoptionComponent } from './components/adopciones/view-adoption/view-adoption.component';
import { CreatePostComponent } from './components/create-post/create-post.component';
import { ExSolovinosComponent } from './components/ex-solovinos/ex-solovinos.component';
import { PostListComponent } from './components/post-list/post-list.component';
import { ViewPostComponent } from './components/view-post/view-post.component';

const routes: Routes = [
  {
    path:'list-posts',
    component:PostListComponent
  },

  {
    path:'create-post',
    component:CreatePostComponent
  },

  {
    path:'view-post/:id',
    component:ViewPostComponent

  },

  {
    path: 'list-adoption',
    component: AdoptionsListComponent
  },
  {
    path: 'create-adoptions',
    component: CreateAdopcionsComponent
  },
  {
    path: 'view-adoption/:id',
    component: ViewAdoptionComponent
  },

  {
    path: 'ex-solovino',
    component: ExSolovinosComponent
  },

  {
    path: 'nosotros',
    component: AboutUsComponent
  },

  {
    path: '',
    component:PostListComponent
  }
    

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
