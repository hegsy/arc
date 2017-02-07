import { NavController, MenuController } from 'ionic-angular';
import { Component } from '@angular/core';

import { EditProfilePage } from '../edit-profile/edit-profile';
import { PostDetailPage } from '../post-detail/post-detail';
import { ReportPage } from '../report/report';
import { LeaderboardPage } from '../leaderboard/leaderboard';
import { LoginPage } from '../login/login';

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

    pages: any[];
    

  constructor(public nav: NavController, public profileData: ProfileData,
    public authData: AuthData, public postData: PostData, public menu: MenuController) {
    
    this.menu = menu;
    this.postData = postData;
    
        this.pages = [
        {title: "Login", component: LoginPage},
        {title: "Report Card", component: ReportPage },
        {title: "Leaderboard", component: LeaderboardPage },
        {title: "Bookmarks"},
        {title: "Settings"},
        {title: "Help"}
    ];
    
  }

  ionViewDidEnter() {
    // Use the id to enable/disable the menus
    this.menu.enable(true, 'profilemenu');
    
  }
  
  ionViewDidLoad () {
    this.getProfileDetails();
  }

  getProfileDetails(){
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
        this.nav.push(ProfilePage);
       
    });
}
    
    goToEdit(){
      this.nav.push(EditProfilePage);
    }

        openPage(page) {
        this.menu.close();
        this.nav.push(page.component);
    }
    
      logOut(){
    this.authData.logoutUser().then(() => {
      this.nav.setRoot(LoginPage);
    });
  }
    
}
    


