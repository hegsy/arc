import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { TaskListPage } from '../task-list/task-list';
import { ReportPage } from '../report/report';

@Component({
  selector: 'page-tasks',
  templateUrl: 'tasks.html'
})
export class TasksPage {

  constructor(public nav: NavController) {}

    ionViewDidLoad() {
    console.log('Hello TasksPage Page');
    }
  
    goToTaskList() {
        this.nav.push(TaskListPage);
    }
    
    goToReport() {
        this.nav.push(ReportPage);
    }

}
