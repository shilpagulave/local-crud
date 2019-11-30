import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { UserService } from "../service/user.service";
import { first } from "rxjs/operators";
import { Router } from "@angular/router";

@Component({
  selector: "app-add-user",
  templateUrl: "./add-user.component.html",
  styleUrls: ["./add-user.component.css"]
})
export class AddUserComponent implements OnInit {
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private userService: UserService
  ) {}

  addForm: FormGroup;

  ngOnInit() {
    this.addForm = this.formBuilder.group({
      // id: [],
      email: ["", Validators.required],
      firstName: ["", Validators.required],
      lastName: ["", Validators.required]
    });
  }

  onSubmit() {
    // console.log(this.frm.value);

    var users: any[] = JSON.parse(localStorage.getItem("users"));
    if (users) {
      // users= JSON.parse(users)
      // var id = users.indexOf(0) + 1;
      users.push(this.addForm.value);
      localStorage.setItem("users", JSON.stringify(users));
    } else {
      var users = [];
      // users.push(1);
      users.push(this.addForm.value);
      // users(id) = 1;
      localStorage.setItem("users", JSON.stringify(users));
    }
    this.addForm.reset();
    this.router.navigate(["list-user"]);
  }
  // this.userService.createUser(this.addForm.value)
  //   .subscribe( data => {
  //     this.router.navigate(['list-user']);
  //   });
}
