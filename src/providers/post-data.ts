import { Injectable } from '@angular/core';

import firebase from 'firebase';

@Injectable()
export class PostData {

public currentUser: any;
public postList: any;
public posts: any;
public favorites: any;
usersRef: any = firebase.database().ref('userProfile');

  constructor() {
    this.currentUser = firebase.auth().currentUser.uid;
    //getting id of logged in user
    this.postList = firebase.database().ref('userProfile/' + this.currentUser + '/postList');
    //getting database reference for userProfile/uid/postList to read and write from

    this.posts = firebase.database().ref('/posts');
  }
  
  // createPost(postName: string, postCategory: string, dateCreated: string, postTag: string, postContent: string ): any {
  //   return this.postList.push({
  //       name: postName,
  //       category: postCategory,
  //       dateCreated: new Date().toString(),
  //       tag: postTag,
  //       content: postContent
  //   }).then(newPost => {

  //   this.postList.child(newPost.key).child('id').set(newPost.key);
  //   });
  // }

  // createPost(author: string, postName: string, postCategory: string, dateCreated: string, postTag: string, postContent: string ): any {
  //   return this.posts.push({
  //       author: this.currentUser,
  //       name: postName,
  //       category: postCategory,
  //       dateCreated: new Date().toString(),
  //       tag: postTag,
  //       content: postContent
  //   }).then(newPost => {

  //   this.posts.child(newPost.key).child('id').set(newPost.key);
  //   });
  // }
  createPost(author: string, postName: string, postCategory: string, dateCreated: string, postTag: string, postContent: string) :any {
  // A post entry.
  var postData = {
    author: this.currentUser,
    name: postName,
    category: postCategory,
    dateCreated: new Date().toString(),
    tag: postTag,
    content: postContent
  };

  // Get a key for a new Post.
  var newPostKey = firebase.database().ref().child('posts').push().key;

  // Write the new post's data simultaneously in the posts list and the user's post list.
  var updates = {};
  updates['/posts/' + newPostKey] = postData;
  updates['/userProfile/' + this.currentUser + '/postList/' + newPostKey] = postData;


  return firebase.database().ref().update(updates);
}
  
deletePost(postId): any {
    return this.postList.child(postId).remove();
  }
  
  getPostList(): any {
    //return this.postList;
    return this.posts;
  }

  getUserPostList() {
    return this.postList;
  }
  
  getPostDetail(postId): any{
    return this.postList.child(postId);
  }
  
  
  addPostToFavorites(userid: string, postid: string) {
        //this.favorites = firebase.database().ref('userProfile/' + this.currentUser + '/favorites' + postid);
        
        //return this.favorites.set(true);
        
        return this.usersRef.child(userid + '/favorites/' + postid).set(true);
    }


}
