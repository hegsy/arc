import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import { PostDetailPage } from '../post-detail/post-detail';

import { CommentsPage } from '../comments/comments';

import { AuthData } from '../../providers/auth-data';
import { PostData } from '../../providers/post-data';

@Component({
  selector: 'page-post-list',
  templateUrl: 'post-list.html'
})
export class PostListPage {

    public postList: any;

  constructor(public nav: NavController, public postData: PostData, public authData: AuthData, public toastCtrl: ToastController) {
    this.nav = nav;
    this.toastCtrl = toastCtrl;
    this.postData = postData;
    
  }
  
  goToComments(){
    this.nav.push(CommentsPage);
  }
  
  ionViewDidLoad (){
    this.postData.getPostList().orderByChild("dateCreated").on('value', snapshot => {
        let rawList = [];
        snapshot.forEach( snap => {
            rawList.push({
                id:snap.key,
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

}




