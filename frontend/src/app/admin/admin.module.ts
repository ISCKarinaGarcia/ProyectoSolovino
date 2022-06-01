import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminLayoutComponent } from './components/admin-layout/admin-layout.component';

import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { SharedModule } from './shared/shared.module';
import { MaterialModule } from '../material/material.module';
import { PostListComponent } from './components/post-list/post-list.component';
import { RouterModule } from '@angular/router';
import { CreatePostComponent } from './components/create-post/create-post.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { ViewPostComponent } from './components/view-post/view-post.component';
import { NgModel } from '@angular/forms';
import { CreateAdopcionsComponent } from './components/adopciones/create-adopcions/create-adopcions.component';
import { ViewAdoptionComponent } from './components/adopciones/view-adoption/view-adoption.component';
import { AdoptionsListComponent } from './components/adopciones/adoptions-list/adoptions-list.component';
import { ExSolovinosComponent } from './components/ex-solovinos/ex-solovinos.component';
import { AboutUsComponent } from './components/about-us/about-us.component';


@NgModule({
  declarations: [
    AdminLayoutComponent,
    PostListComponent,
    CreatePostComponent,
    ViewPostComponent,
    CreateAdopcionsComponent,
    ViewAdoptionComponent,
    AdoptionsListComponent,
    ExSolovinosComponent,
    AboutUsComponent,
    
  
  
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    SharedModule,
    MaterialModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,


  ]
})
export class AdminModule { }
