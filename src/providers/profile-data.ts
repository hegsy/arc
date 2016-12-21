import { Injectable } from '@angular/core';

import 'rxjs/add/operator/map';

import firebase from 'firebase';

/*
  Generated class for the ProfileData provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class ProfileData {

    userProfile: any;
    
    currentUser: any;

  constructor() {
    console.log('Hello ProfileData Provider');
    
    this.currentUser = firebase.auth().currentUser;
    this.userProfile = firebase.database().ref('/userProfile');
  }
  
  getUserProfile(): any {
    return this.userProfile.child(this.currentUser.uid);
  }
  
    updateName(firstName: string, lastName: string): any {
    return this.userProfile.child(this.currentUser.uid).update({
      firstName: firstName,
      lastName: lastName,
    });
  }
  
  updateEmail(newEmail: string): any {
    this.currentUser.updateEmail(newEmail).then(() => {
      this.userProfile.child(this.currentUser.uid).update({
        email: newEmail
      });
    }, (error) => {
      console.log(error);
    });
  }
  
  updatePassword(newPassword: string): any {
    this.currentUser.updatePassword(newPassword).then(() => {
      console.log("Password Changed");
    }, (error) => {
      console.log(error);
    });
  }

}
