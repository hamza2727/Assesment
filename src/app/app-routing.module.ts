import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostDetailsComponent } from './pages/admin/posts/post-details/post-details.component';
import { PostsComponent } from './pages/admin/posts/posts.component';
import { UserDetailsComponent } from './pages/admin/users/user-details/user-details.component';
import { AuthGuard } from './services/auth.guard';

// Using Angular Guards,
// Create a condition to allow access to /admin only if user is logged in
// When user is not logged in - always redirect to /login
const routes: Routes = [
  {
    path: 'admin',
    loadChildren: () =>
      import('./pages/admin/admin.module').then((m) => m.AdminModule),
  },
  {
    path: 'posts', canActivate: [AuthGuard],
    loadChildren: () =>
      import('./pages/admin/posts/posts.module').then((m) => m.PostsModule),
  },
  {
    path: 'users', canLoad: [AuthGuard],
    loadChildren: () =>
      import('./pages/admin/users/users.module').then((m) => m.UsersModule),
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./pages/login/login.module').then((m) => m.LoginModule),
  },
  {
    path: 'postdetails',
    component: PostDetailsComponent,
  }, {
    path: 'userdetails',
    component: UserDetailsComponent,
  },


  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'admin',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
