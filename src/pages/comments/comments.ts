import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';

import { CommentCreatePage } from '../comment-create/comment-create';

import { CommentData } from '../../providers/comment-data';


@Component({
  selector: 'page-comments',
  templateUrl: 'comments.html'
})
export class CommentsPage {
    
    public votes: any;

    public comments: any;

  constructor(public navCtrl: NavController, public modalCtrl: ModalController, public commentData: CommentData) {}

  ionViewDidLoad (){
    this.commentData.getComments().on('value', snapshot => {
        let rawList = [];
        snapshot.forEach( snap => {
            rawList.push({
                id:snap.key,
                content: snap.val().content,
                author: snap.val().author,
                dateCreated: snap.val().dateCreated
                
            });
        });
        this.comments = rawList;
    });
  }

    vote(commentid: string, count: number){
        this.commentData.vote(commentid, count);
    }
  


  goToCreateComment(){
      
      let modal = this.modalCtrl.create(CommentCreatePage);
        modal.present();
  
  }

}
