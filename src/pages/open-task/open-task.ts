import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
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


  constructor(public nav: NavController, public navParams: NavParams) {
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

}
