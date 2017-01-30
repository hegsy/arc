import { Component} from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';



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
	
	arTaskCategory: any;
	socialTaskCategory: any;

  constructor(public nav: NavController, public navParams: NavParams) {

  	this.navParams = navParams;
    
     this.arTaskCategory = navParams.get('taskCategory');
    


  	    

  }

  ionViewDidLoad() {
    console.log('Hello TaskListPage Page');
  }

}

