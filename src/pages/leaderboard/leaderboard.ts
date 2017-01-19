import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the Leaderboard page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-leaderboard',
  templateUrl: 'leaderboard.html'
})
export class LeaderboardPage {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello LeaderboardPage Page');
  }

}
