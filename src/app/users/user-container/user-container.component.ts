import { Component, OnInit } from "@angular/core";
//import { UserModel, OnInit } from '@angular/core';
import { UserInfo, UserModel } from "../../models/user-model";
@Component({
  selector: "app-user-container",
  templateUrl: "./user-container.component.html",
  styleUrls: ["./user-container.component.css"]
})
export class UserContainerComponent implements OnInit {
  currentUser: UserModel;
  constructor() {}

  ngOnInit() {
    console.log("User Container Init");

    //console.log(this.currentUser.id);
    this.currentUser = new UserModel(
      1,
      "Gah",
      "Gah_don@gmail.com",
      new UserInfo(
        "Gah",
        "don",
        "Developer",
        "http://authenticgoods.co/wrapbootstrap/themes/sparks/img/team/avatar-male.png"
      )
    );
  }
   updateUser(username: string, email: string){
    this.currentUser.email = email;
    this.currentUser.username = username;
  }
}
