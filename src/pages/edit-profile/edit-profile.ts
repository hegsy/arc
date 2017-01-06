import { NavController, AlertController } from 'ionic-angular';
import { Component } from '@angular/core';
import { ProfileData } from '../../providers/profile-data';
import { AuthData } from '../../providers/auth-data';


@Component({
  selector: 'page-edit-profile',
  templateUrl: 'edit-profile.html',
})
export class EditProfilePage {
  public userProfile: any;


  constructor(public nav: NavController, public profileData: ProfileData,
    public authData: AuthData, public alertCtrl: AlertController) {

    this.profileData.getUserProfile().on('value', (data) => {
      this.userProfile = data.val();
    });

  }

  updateName(){
    let alert = this.alertCtrl.create({
      message: "Your first name & last name",
      inputs: [
        {
          name: 'firstName',
          placeholder: 'Your first name',
          value: this.userProfile.firstName
        },
        {
          name: 'lastName',
          placeholder: 'Your last name',
          value: this.userProfile.lastName
        },
      ],
      buttons: [
        {
          text: 'Cancel',
        },
        {
          text: 'Save',
          handler: data => {
            this.profileData.updateName(data.firstName, data.lastName);
          }
        }
      ]
    });
    alert.present();
  }

  updateEmail(){
    let alert = this.alertCtrl.create({
      inputs: [
        {
          name: 'newEmail',
          placeholder: 'Your new email',
        },
      ],
      buttons: [
        {
          text: 'Cancel',
        },
        {
          text: 'Save',
          handler: data => {
            this.profileData.updateEmail(data.newEmail);
          }
        }
      ]
    });
    alert.present();
  }

  updatePassword(){
    let alert = this.alertCtrl.create({
      inputs: [
        {
          name: 'newPassword',
          placeholder: 'Your new password',
          type: 'password'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
        },
        {
          text: 'Save',
          handler: data => {
            this.profileData.updatePassword(data.newPassword);
          }
        }
      ]
    });
    alert.present();
  }
  
    updateCollege(){
    let alert = this.alertCtrl.create({
      message: "Choose Your College",
      inputs: [
        {
          name: 'college',
          placeholder: 'Name Of College',
          value: this.userProfile.college
        },        
      ],
      buttons: [
        {
          text: 'Cancel',
        },
        {
          text: 'Save',
          handler: data => {
            this.profileData.updateCollege(data.college);
          }
        }
      ]
    });
    alert.present();
  }
  
      updateCourse(){
    let alert = this.alertCtrl.create({
      message: "Choose Your Course",
      inputs: [
        {
          name: 'course',
          placeholder: 'Your Course',
          value: this.userProfile.course
        },        
      ],
      buttons: [
        {
          text: 'Cancel',
        },
        {
          text: 'Save',
          handler: data => {
            this.profileData.updateCourse(data.course);
          }
        }
      ]
    });
    alert.present();
  }
  
        updateYear(){
    let alert = this.alertCtrl.create({
      message: "Current Year",
      inputs: [
        {
          name: 'year',
          placeholder: 'What year are you in?',
          value: this.userProfile.year
        },        
      ],
      buttons: [
        {
          text: 'Cancel',
        },
        {
          text: 'Save',
          handler: data => {
            this.profileData.updateYear(data.year);
          }
        }
      ]
    });
    alert.present();
  }
  
}


    



