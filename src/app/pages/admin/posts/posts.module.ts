import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from '../admin-routing.module';
import { PostsComponent } from './posts.component';
import { AdminModule } from '../admin.module';
import { PostsRoutingModule } from './posts-routing.module';
import { PostDetailsComponent } from './post-details/post-details.component';



@NgModule({
  declarations: [PostsComponent, PostDetailsComponent],
  imports: [
    CommonModule, PostsRoutingModule
  ]
})
export class PostsModule { 
  moduleIn: string = "I am in Post Module";
  constructor() { 
    console.log(this.moduleIn);
  }
  
}
