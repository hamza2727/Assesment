import { Component, OnInit } from '@angular/core';
import { PostsService } from 'src/app/services/posts/posts.service';
import { UsersService } from 'src/app/services/users/users.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {
  userId: any
  userData: any
  userAddress: any;
  userName: any
  userCompany: any;
  noOfPosts: any;
  constructor(private userService: UsersService, private postService: PostsService) {
    this.userId = this.userService.userId;
    this.getUserDetail(); this.noOfPostsByCurrentUser(this.userId);
  }

  ngOnInit(): void {
  }

  private getUserDetail(): void {
    this.userService.getUserById(this.userId).subscribe(
      (res) => {
        this.userData = res;
        this.userName = this.userData.username
        this.userAddress = this.userData.address.street + this.userData.address.suite +
          this.userData.address.city;
        this.userCompany = this.userData.company.name + ' ' + 'Catch Phrase:'
          + this.userData.company.catchPhrase + ' ' + 'BS:' + this.userData.company.bs

      },
      (err) => {
        console.log(err);
      }
    );
  }

  noOfPostsByCurrentUser = (id: any) => {

    return new Promise<void>(async (resolve, reject) => {
      try {
        this.noOfPosts = 0;
        let res = await this.postService.loadPosts().toPromise();
        res.forEach((element: { userId: any; }) => {
          if (element.userId === id) { this.noOfPosts++ }
        });
        resolve();
      } catch (e) {
        console.log(e);
        reject(e);
        throw e;
      }

    });
  };
}
