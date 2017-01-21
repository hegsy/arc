import { Injectable } from '@angular/core';

import firebase from 'firebase';

import { AuthData } from '../providers/auth-data';



@Injectable()
export class CommentData {

public comments: any;
public postList: any;
public currentUser: any;

  constructor(public authData: AuthData) {
    console.log('Hello CommentData Provider');
    this.currentUser = firebase.auth().currentUser.uid;
    this.comments = firebase.database().ref('/comments');
 
  }


    createComment(commentContent: string, author: string,  dateCreated: string): any {
    
    return this.comments.push({
        content: commentContent,
        author: this.currentUser,
   
        dateCreated: new Date().toString()
       }).then(newComment => {
    this.comments.child(newComment.key).child('id').set(newComment.key);
    });
    
    
}



  getComments(): any {
    return this.comments;
  }
}
