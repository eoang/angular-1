import { Component, OnInit } from '@angular/core';
//import { UserModel, OnInit } from '@angular/core';
import {UserInfo, UserModel} from '../../models/user-model';
@Component({
  selector: 'app-user-container',
  templateUrl: './user-container.component.html',
  styleUrls: ['./user-container.component.css']
})
export class UserContainerComponent implements OnInit {

  public currentUser : UserModel
  constructor() { 
      this.currentUser;
  }

  ngOnInit() {
    console.log('User Container Init')
    // this.currentUser = new UserModel(0, 'johndoe', 'johndoe@gmail.com',
    //   new UserInfo('John', 'Doe', 'Clerk', 'http://authenticgoods.co/wrapbootstrap/themes/sparks/img/team/avatar-male.png'));

//console.log(this.currentUser.id);
     this.currentUser = new UserModel(1,'Gah','Gah.don@gmail.com', 
     new UserInfo ('Gah','don','Developer','http://authenticgoods.co/wrapbootstrap/themes/sparks/img/team/avatar-male.png') );
  }

   
}