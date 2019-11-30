import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { UserService } from "../service/user.service";
import { User } from "../model/user.model";
import { CurrencyIndex } from "@angular/common/src/i18n/locale_data";

@Component({
  selector: "app-list-user",
  templateUrl: "./list-user.component.html",
  styleUrls: ["./list-user.component.css"]
})
export class ListUserComponent implements OnInit {
  users: User[];
  user1: User[];

  constructor(private router: Router, private userService: UserService) {}

  ngOnInit() {
    this.users = JSON.parse(localStorage.getItem("users"));
  }

  // deleteUser(user: User): void {
  //   var users = JSON.parse(localStorage.getItem("users"));
  //   debugger;
  //   this.users.forEach((cur, index) => {
  //     if (user.email == cur.email) {
  //       this.users.splice(index, 1);
  //       // localStorage.removeItem(JSON.stringify(user));
  //       // users = JSON.stringify(users);
  //       // localStorage.setItem("users", users);
  //       // var users = JSON.parse(localStorage.getItem("users"));
  //       // localStorage.setItem("users", JSON.stringify(user));
  //       users = JSON.stringify(localStorage.getItem(users));
  //     }
  //   });
  //   // localStorage.setItem("users", JSON.stringify(user));
  // }

  deleteUser(user: User) {
    if (confirm("Would you like to delete this post?")) {
      this.users.forEach((current, index) => {
        if (user.email === current.email) {
          this.users.splice(index, 1);
        }
      });
    }
    localStorage.setItem("users", JSON.stringify(this.users));
  }

  editUser(user: User): void {
    
    // localStorage.setItem("editUserId", JSON.stringify(user));
    

    this.router.navigate(["edit-user"]);
  }

  addUser(): void {
    this.router.navigate(["add-user"]);
  }
}
