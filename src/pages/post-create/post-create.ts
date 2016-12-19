import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the PostCreate page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-post-create',
  templateUrl: 'post-create.html'
})
export class PostCreatePage {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello PostCreatePage Page');
  }

}
