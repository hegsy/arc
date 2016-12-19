import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { MenuController } from 'ionic-angular';
import { LoginPage } from '../../pages/login/login';
import { AuthData } from '../../providers/auth-data';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

    
  constructor(public nav: NavController, public menuCtrl: MenuController,public authData: AuthData) {

  }

logOut(){
  this.authData.logoutUser().then(() => {
    this.nav.setRoot(LoginPage);
  });
}


}
