import { Injectable } from '@angular/core';

import firebase from 'firebase';


@Injectable()
export class CommentData {

public comments: any;

  constructor() {
    console.log('Hello CommentData Provider');
    
    this.comments = firebase.database().ref('/comments');
  }


    createComment(commentContent: string): any {
    return this.comments.push({
        content: commentContent
       }).then(newComment => {

    this.comments.child(newComment.key).child('id').set(newComment.key);
    });
}
}
