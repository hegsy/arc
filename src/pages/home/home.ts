import { Component } from '@angular/core';

import { NavController, MenuController } from 'ionic-angular';
import { ProfilePage } from '../profile/profile';
import { LoginPage } from '../login/login';

import { AuthData } from '../../providers/auth-data';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
    public postList: any;
    pages: any[];
    
  constructor(public nav: NavController,public menu: MenuController, public authData: AuthData) {
    this.nav = nav;
    this.menu = menu;
    
    this.postList = [
        { name : "First Post", category: "Social", content: "This is my first post on ARC" }
    ]
    
    this.pages = [
        {title: "Login", component: LoginPage }
    ];
    
 
  }

    goToProfile(){
        this.nav.push(ProfilePage);
    }
    
    openPage(page) {
        this.menu.close();
        this.nav.push(page.component);
    }
    
      logOut(){
    this.authData.logoutUser().then(() => {
      this.nav.setRoot(LoginPage);
    });
  }

}
