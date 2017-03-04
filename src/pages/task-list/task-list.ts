import { Component} from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { OpenTaskPage } from '../open-task/open-task';
import { TaskCategory } from '../task-category';

@Component({
  selector: 'page-task-list',
  templateUrl: 'task-list.html'
})
export class TaskListPage {
	
	task: any[];
  artasks: TaskCategory[];

  constructor(public nav: NavController, public navParams: NavParams) {

  this.artasks = [
        {id: 1, title: "Library", desc: "Scan Poster for More Information", credits: 100},
        {id: 2, title: "Canteen", desc: "Scan Poster for More Information", credits: 100},
        {id: 3, title: "Health", desc: "Scan Poster for More Information", credits: 100},
        {id: 4, title: "Computers", desc: "Scan Poster for More Information", credits: 100},
        {id: 5, title: "Counselling", desc: "Scan Poster for More Information", credits: 100},
        {id: 6, title: "Careers", desc: "Scan Poster for More Information", credits: 100}
    ];

  	this.navParams = navParams;
    this.task = navParams.get('taskCategory');
  }

  ionViewDidLoad() {
    console.log('Hello TaskListPage Page');
  }

  goToOpenTask(taskId){
    this.nav.push(OpenTaskPage, {
    taskId: taskId,
    taskCategory: this.artasks,

  });

}

}

