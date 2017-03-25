import { Component } from '@angular/core';
import { NavController, ToastController, AlertController, NavParams } from 'ionic-angular';
import { ProfileData } from '../../providers/profile-data';
import { BookmarkData } from '../../providers/bookmark-data';

import { BookmarksPage } from '../bookmarks/bookmarks';

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
    checkboxDisabled: any;


  constructor(public nav: NavController, public navParams: NavParams, public profileData: ProfileData, 
    public toastCtrl:ToastController, public alertCtrl:AlertController, public bookmarkData: BookmarkData) {
    this.navParams = navParams;
    this.toastCtrl = toastCtrl;
    this.alertCtrl = alertCtrl;
    this.bookmarkData = bookmarkData;

    this.task = navParams.get('taskCategory');
    var taskid = this.navParams.get('taskId');
    // console.log(this.navParams.get('taskId'));
    this.currentTask = this.task[taskid];
    // console.log(this.currentTask);
    // console.log(this.task[taskid]);
  }

  ionViewDidLoad() {
    //enabled true for user testing
    this.checkboxDisabled = false;
  }


  updateCredits(credits: number) {
      this.profileData.updateCreditsOnProfile(credits);

    let alert = this.alertCtrl.create({
      title: "Save Bookmark",
      message: "Do you want to bookmark this information?",

      buttons: [
        {
          text: 'No',
        },
        {
          text: 'Yes',
          handler: () => {
            this.createBookmark('Library', 'Opening Hours');
          }
        }
      ]
    });
    alert.present();

    this.checkboxDisabled = true;


    }


    createBookmark(title: string, desc: string) {
    this.bookmarkData.createBookmark(title, desc).then(() => {
        this.nav.push(BookmarksPage);
        
    });
}


}
