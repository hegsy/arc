import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the PostDetail page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-post-detail',
  templateUrl: 'post-detail.html'
})
export class PostDetailPage {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello PostDetailPage Page');
  }

}
