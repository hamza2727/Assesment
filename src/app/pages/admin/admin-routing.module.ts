import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
  },
  // Allow acces to /posts if user has 'catalog.read' permissions
  //dont need this here 
  // {
  //   path: 'posts',
  //   loadChildren: () =>
  //     import('./posts/posts.module').then((m) => m.PostsModule),
  // },
  // Allow acces to /users if user has 'user.read' permissions

  //we dont need this here 
  // {
  //   path: 'users',
  //   loadChildren: () =>
  //     import('./users/users.module').then((m) => m.UsersModule),
  // },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
