import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ProfileData } from '../../providers/profile-data';

/*
  Generated class for the OpenTask page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-open-task',
  templateUrl: 'open-task.html'
})
export class OpenTaskPage {

    currentTask: any;
    task: any[];


  constructor(public nav: NavController, public navParams: NavParams, public profileData: ProfileData) {
    this.navParams = navParams;
    this.task = navParams.get('taskCategory');
    var taskid = this.navParams.get('taskId');
    console.log(this.navParams.get('taskId'));
    this.currentTask = this.task[taskid];
    console.log(this.currentTask);
    console.log(this.task[taskid]);
  }

  ionViewDidLoad() {
    console.log('Hello OpenTaskPage Page');
  }

  onSubmit(): void {
    console.log('Submitted value: ');

}

  updateCredits(credits: number) {
    console.log("updating credits");
  //this.favorites = firebase.database().ref('userProfile/' + this.currentUser + '/favorites' + postid);
  //return this.favorites.set(true);
      this.profileData.updateCreditsOnProfile(credits);
    }
}
