import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { MenuController } from 'ionic-angular';
import { LoginPage } from '../../pages/login/login';
import { ProfilePage } from '../profile/profile';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

    
  constructor(public nav: NavController) {
    this.nav = nav;
  }

    goToProfile(){
        this.nav.push(ProfilePage);
    }


}
