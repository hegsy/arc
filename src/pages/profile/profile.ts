import { NavController } from 'ionic-angular';
import { Component } from '@angular/core';

import { EditProfilePage } from '../edit-profile/edit-profile';
import { PostDetailPage } from '../post-detail/post-detail';

import { ProfileData } from '../../providers/profile-data';
import { AuthData } from '../../providers/auth-data';
import { PostData } from '../../providers/post-data';

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})

export class ProfilePage {

    public userProfile: any;

    public postList: any;
    

  constructor(public nav: NavController, public profileData: ProfileData,
    public authData: AuthData, public postData: PostData) {
    
    this.postData = postData;
    
    
  }
  
  ionViewDidLoad () {
    this.profileData.getUserProfile().on('value', (data) => {
      this.userProfile = data.val();
    });
    
    
    
    this.postData.getPostList().on('value', snapshot => {
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
       
    });
}
    
    goToEdit(){
      this.nav.push(EditProfilePage);
    }
    
}
    


