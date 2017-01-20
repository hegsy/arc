import { Component } from '@angular/core';
import { NavController, ViewController } from 'ionic-angular';

/*
  Generated class for the CommentCreate page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-comment-create',
  templateUrl: 'comment-create.html'
})
export class CommentCreatePage {

  constructor(public navCtrl: NavController, public viewCtrl: ViewController) {}

  ionViewDidLoad() {
    console.log('Hello CommentCreatePage Page');
  }
  
    
  closeModal() {
    this.viewCtrl.dismiss();
  }

}
