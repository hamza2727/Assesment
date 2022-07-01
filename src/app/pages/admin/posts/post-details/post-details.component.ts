import { PostsService } from 'src/app/services/posts/posts.service';
import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users/users.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.scss']
})
export class PostDetailsComponent implements OnInit {
  postId: any;
  UsersData: any
  constructor(private postsService: PostsService, private userService: UsersService,
    private router: Router) {
    this.postId = this.postsService.postId;
    this.loadPostByPostId();
  }

  ngOnInit(): void { }

  loadPostByPostId(): void {
    debugger;
    this.postsService.getPostById(this.postId).subscribe(
      (res: any) => {
        let userId = res.userId;
        this.getUserDetails(userId)
      },
      (err) => {
        console.log(err);
      }
    );
  }

  getUserDetails(id: any): void {
    this.userService.getUserById(id).subscribe(
      (res: any) => {
        this.UsersData = res;
      },
      (err) => {
        console.log(err);
      }
    );
  }

  navigateToUserDetails(id: any): void {
    debugger;
    this.userService.updateUserId(id);
    this.router.navigate(['/userdetails']);
  }
}
