import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { MenuController } from 'ionic-angular';
import { LoginPage } from '../../pages/login/login';
import { ProfilePage } from '../profile/profile';
import { PostListPage } from '../post-list/post-list';
import { PostCreatePage } from '../post-create/post-create';



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
