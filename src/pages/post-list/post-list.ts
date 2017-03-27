import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import { PostDetailPage } from '../post-detail/post-detail';

import { PostCreatePage } from '../post-create/post-create';
import { CommentsPage } from '../comments/comments';

import { AuthData } from '../../providers/auth-data';
import { PostData } from '../../providers/post-data';

@Component({
  selector: 'page-post-list',
  templateUrl: 'post-list.html'
})
export class PostListPage {

    shouldAnimate: boolean = true;

    public postList: any;

  constructor(public nav: NavController, public postData: PostData, public authData: AuthData, public toastCtrl: ToastController) {
    this.nav = nav;
    this.toastCtrl = toastCtrl;
    this.postData = postData;
    
  }
  
  
  ionViewDidLoad (){
    this.getPosts();
  }

  goToComments(postId){
    this.nav.push(CommentsPage, {
      postId: postId
    });
  }

  // getPosts(){
  //   this.postData.getPostList().orderByChild("dateCreated").on('value', snapshot => {
  //       let rawList = [];
  //       snapshot.forEach( snap => {
  //           rawList.push({
  //               id:snap.key,
  //               name: snap.val().name,
  //               category: snap.val().category,
  //               dateCreated: snap.val().dateCreated,
  //               tag: snap.val().tag,
  //               content: snap.val().content
  //           });
  //       });
  //       this.postList = rawList;
  //   });
  // }

    getPosts(){
    this.postData.getPostList().orderByChild("dateCreated").on('value', snapshot => {
        let rawList = [];
        snapshot.forEach( snap => {
            rawList.push({
                id:snap.key,
                author: snap.val().author,
                name: snap.val().name,
                category: snap.val().category,
                dateCreated: snap.val().dateCreated,
                tag: snap.val().tag,
                content: snap.val().content
            });
        });
        this.postList = rawList;
    });
  }
  
  goToPostDetail(postId){
  this.nav.push(PostDetailPage, {
    postId: postId,
  });
}

deletePost(postId) {
    this.postData.deletePost(postId).then(() => {
        this.nav.pop();
        //to go back to TabsPage
    });
    

	    }
        
addPostToFavorites(postId) {

let currentUser = this.authData.getLoggedInUser().uid;

 this.postData.addPostToFavorites(currentUser, postId);
 
 let toast = this.toastCtrl.create({
      message: 'Added to Favourites!',
      duration: 3000,
      position: 'top'
    });
    toast.present();
	                
	        }

    goToCreate(){
          this.nav.push(PostCreatePage);
        } 


doRefresh(refresher) {
    console.log('Begin async operation');
    this.postData.getPostList();
    setTimeout(()=> {
    refresher.complete();
    }, 1500);

}



}




