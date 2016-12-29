import { NavController, AlertController } from 'ionic-angular';
import { Component } from '@angular/core';

import { EditProfilePage } from '../edit-profile/edit-profile';

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})

export class ProfilePage {


    constructor(public nav: NavController) {

    }
    
    goToEdit(){
      this.nav.push(EditProfilePage);
    }
    
}
    


