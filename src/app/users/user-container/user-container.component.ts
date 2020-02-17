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
    this.currentUser = new UserModel(1,'Gah','Gah.don@gmail.com', new UserInfo ('Gah','don','Developer','http://authenticgoods.co/wrapbootstrap/themes/sparks/img/team/avatar-male.png','01-234-343434') );
  }

   
}