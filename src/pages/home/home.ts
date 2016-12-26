import { Component } from '@angular/core';

import { NavController, MenuController } from 'ionic-angular';
import { ProfilePage } from '../profile/profile';
import { LoginPage } from '../login/login';




@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

    pages: any[];
    
  constructor(public nav: NavController,public menu: MenuController) {
    this.nav = nav;
    this.menu = menu;
    
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

}
