import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PostListPage } from '../post-list/post-list';
import { PostCreatePage } from '../post-create/post-create';

@Component({
  selector: 'page-posts',
  templateUrl: 'posts.html'
})
export class PostsPage {

  public swipe: number = 0;

  constructor(public nav: NavController) {}

  ionViewDidLoad() {
    console.log('Hello PostsPage Page');
  }
  

    goToCreate(){
      this.nav.push(PostCreatePage);
    }

    goToList(){
      this.nav.push(PostListPage);
    }

      swipeEvent(e) {
    this.swipe++
  }

}
