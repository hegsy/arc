import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';

import { CommentCreatePage } from '../comment-create/comment-create';

@Component({
  selector: 'page-comments',
  templateUrl: 'comments.html'
})
export class CommentsPage {

  constructor(public navCtrl: NavController, public modalCtrl: ModalController) {}

  ionViewDidLoad() {
    console.log('Hello CommentsPage Page');
  }

  
  goToCreateComment(){
      
      let modal = this.modalCtrl.create(CommentCreatePage);
        modal.present();
  
  }

}
