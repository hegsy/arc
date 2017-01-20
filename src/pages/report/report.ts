import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { LeaderboardPage } from '../leaderboard/leaderboard';

@Component({
  selector: 'page-report',
  templateUrl: 'report.html'
})
export class ReportPage {

  constructor(public nav: NavController) {
  
    
  
  }

  ionViewDidLoad() {
    console.log('Hello ReportPage Page');
    
    
  }
  
  goToLeaderboard(){
      this.nav.push(LeaderboardPage);
    }
    
    

}
