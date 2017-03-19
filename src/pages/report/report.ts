import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { ProfileData } from '../../providers/profile-data';

import { LeaderboardPage } from '../leaderboard/leaderboard';

@Component({
  selector: 'page-report',
  templateUrl: 'report.html'
})
export class ReportPage {

public userProfile: any;

  constructor(public nav: NavController, public profileData: ProfileData) {
    
  
  }


    ionViewDidLoad () {
    this.getProfileDetails();
//     var userId = firebase.auth().currentUser.uid;
// return firebase.database().ref('/userProfile/' + userId).once('value').then(function(snapshot) {
//     this.currentCredits = snapshot.val().credits;
//   // ...
// });
  }

  getProfileDetails(){
    this.profileData.getUserProfile().on('value', (data) => {
      this.userProfile = data.val();
    });
    
  }
  
  goToLeaderboard(){
      this.nav.push(LeaderboardPage);
    }
    
    

}
