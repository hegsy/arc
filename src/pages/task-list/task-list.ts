import { Component} from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-task-list',
  templateUrl: 'task-list.html'
})
export class TaskListPage {
	
	task: any[];


  constructor(public nav: NavController, public navParams: NavParams) {

  	this.navParams = navParams;
     this.task = navParams.get('taskCategory');
  }

  ionViewDidLoad() {
    console.log('Hello TaskListPage Page');
  }

}

