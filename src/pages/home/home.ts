import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { MenuController } from 'ionic-angular';

import { LoginPage } from '../login/login';
import { SignupPage } from '../signup/signup';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
    loginPage = LoginPage;
    signupPage = SignupPage;
    
  constructor(public navCtrl: NavController, public menuCtrl: MenuController) {

  }



}
