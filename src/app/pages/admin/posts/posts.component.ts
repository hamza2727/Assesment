import { Component, OnInit } from '@angular/core';
import { PostsService } from 'src/app/services/posts/posts.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  listOfPosts: any;
  constructor(private postsService: PostsService,
    private router: Router) { this.getListOfPosts(); }

  ngOnInit(): void {
  }

  getListOfPosts(): void {
    debugger;
    this.postsService.loadPosts().subscribe(
      (res) => {
        this.listOfPosts = res;
      },
      (err) => {
        console.log(err)
      }
    );
  }

  navigateToPostDetails(postid: any): void {
    debugger;
    this.postsService.updatePostId(postid);
    this.router.navigate(['/postdetails']);
  }
}
