import { Injectable } from '@angular/core';

import firebase from 'firebase';

import { AuthData } from '../providers/auth-data';



@Injectable()
export class CommentData {

public comments: any;
public postList: any;
public currentUser: any;
public votes: any;
commentsRef: any = firebase.database().ref('comments');

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

vote(commentid: string, count: number):any {
    //this.votes = firebase.database().ref('comments/' + commentid + '/votes');
    
    count = 1;
    
    //return this.votes.set(count);
    return this.commentsRef.child(commentid + '/votes/' + this.currentUser).set(count);
}


  getComments(): any {
    return this.comments;
  }
}
