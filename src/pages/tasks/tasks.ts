import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { TaskListPage } from '../task-list/task-list';
import { ReportPage } from '../report/report';

import { TaskCategory } from '../task-category';

@Component({
  selector: 'page-tasks',
  templateUrl: 'tasks.html'
})
export class TasksPage {

  artasks: TaskCategory[];
  socialtasks: TaskCategory[];

  constructor(public nav: NavController) {


        this.artasks = [
        {title: "Library", desc: "Add a Photo to your Profile", credits: 100},
        {title: "Canteen", desc: "Add a Photo to your Profile", credits: 100},
        {title: "Health", desc: "Add Friends on the same Course", credits: 100},
        {title: "Computers", desc: "Add Friends on a different Course", credits: 100},
        {title: "Counselling", desc: "Add a Photo to your Profile", credits: 100},
        {title: "Careers", desc: "Add a Photo to your Profile", credits: 100}
    ];

        this.socialtasks = [
        {title: "Add 5 Friends", desc: "Add a Photo to your Profile", credits: 100},
        {title: "Add 20 Friends", desc: "Add a Photo to your Profile", credits: 100},
        {title: "Add 5 Classmates", desc: "Add Friends on the same Course", credits: 100},
        {title: "Add 5 Non-Classmates", desc: "Add Friends on a different Course", credits: 100},
        {title: "Add 3 Friends in a different Year", desc: "Add a Photo to your Profile", credits: 100},
        {title: "Profile Picture", desc: "Add a Photo to your Profile", credits: 100}
    ];
  }

    ionViewDidLoad() {
    console.log('Hello TasksPage Page');
    }
  
    goToTaskList(array) {
        this.nav.push(TaskListPage, {
          taskCategory: array,

        });
    }
    
    goToReport() {
        this.nav.push(ReportPage);
    }


}
