import { Component } from '@angular/core';

import { NavController, MenuController } from 'ionic-angular';
import { ProfilePage } from '../profile/profile';
import { LoginPage } from '../login/login';
import { TasksPage } from '../tasks/tasks';
import { PostsPage } from '../posts/posts';
import { PostDetailPage } from '../post-detail/post-detail';

import { AuthData } from '../../providers/auth-data';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
    public postList: any;
    pages: any[];
    
  constructor(public nav: NavController,public menu: MenuController, public authData: AuthData) {
    this.nav = nav;
    this.menu = menu;
   
    
    this.postList = [
        { name : "First Post", category: "Social", dateCreated: "12 Dec", tag: "first", content: "This is my first post on ARC" }
    ];
    
    this.pages = [
        {title: "Login", component: LoginPage},
        {title: "Report Card"},
        {title: "Leaderboard"},
        {title: "Bookmarks"},
        {title: "Settings"},
        {title: "Help"}
    ];
    
 
  }

    goToProfile(){
        this.nav.push(ProfilePage);
    }
    
    goToTasks(){
      this.nav.push(TasksPage);
    }
    
    goToPosts(){
      this.nav.push(PostsPage);
    }
    
    goToPostDetail(postId){
        this.nav.push(PostDetailPage, {
        postId: postId,
    });
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
