import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the TaskList page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-task-list',
  templateUrl: 'task-list.html'
})
export class TaskListPage {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello TaskListPage Page');
  }

}
