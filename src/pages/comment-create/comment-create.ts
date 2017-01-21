import { Component } from '@angular/core';
import { NavController, ViewController } from 'ionic-angular';

import { CommentData } from '../../providers/comment-data';

@Component({
  selector: 'page-comment-create',
  templateUrl: 'comment-create.html'
})
export class CommentCreatePage {

  constructor(public nav: NavController, public viewCtrl: ViewController, public commentData: CommentData) {
  
  this.commentData = commentData;
  this.nav = nav;
  }

  ionViewDidLoad() {
    console.log('Hello CommentCreatePage Page');
  }
  
    
  closeModal() {
    this.viewCtrl.dismiss();
  }
  
  createComment(commentContent: string, author: string,  dateCreated: string) {
    this.commentData.createComment(commentContent, author,  dateCreated).then(() => {
        this.nav.pop();
        
    });
}

}
