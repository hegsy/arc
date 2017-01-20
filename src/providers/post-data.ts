import { Injectable } from '@angular/core';

import firebase from 'firebase';

@Injectable()
export class PostData {

public currentUser: any;
public postList: any;

  constructor() {
    this.currentUser = firebase.auth().currentUser.uid;
    //getting id of logged in user
    this.postList = firebase.database().ref('userProfile/' + this.currentUser + '/postList');
    //getting database reference for userProfile/uid/postList to read and write from
  }
  
  createPost(postName: string, postCategory: string, dateCreated: string, postTag: string, postContent: string ): any {
    return this.postList.push({
        name: postName,
        category: postCategory,
        dateCreated: new Date().toString(),
        tag: postTag,
        content: postContent
    }).then(newPost => {

    this.postList.child(newPost.key).child('id').set(newPost.key);
    });
  }
  
deletePost(postId): any {
    return this.postList.child(postId).remove();
  }
  
  getPostList(): any {
    return this.postList;
  }
  
  getPostDetail(postId): any{
    return this.postList.child(postId);
  }

}
