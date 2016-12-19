import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the PostList page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-post-list',
  templateUrl: 'post-list.html'
})
export class PostListPage {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello PostListPage Page');
  }

}
