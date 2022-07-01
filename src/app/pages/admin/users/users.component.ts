import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users/users.service';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  listOfUsers: any;
  constructor(private userService: UsersService,
    private router: Router) { this.getUsersList() }

  ngOnInit(): void {
  }


  getUsersList(): void {
    this.userService.getUsers().subscribe(
      (res) => {
        this.listOfUsers = res;
      },
      (err) => {
        console.log(err);
      }
    );
  }

  navigateToUserDetails(id: any): void {
    this.userService.updateUserId(id);
    this.router.navigate(['/userdetails']);
  }
}
