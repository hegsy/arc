import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { PostData } from '../../providers/post-data';

@Component({
  selector: 'page-post-detail',
  templateUrl: 'post-detail.html'
})
export class PostDetailPage {

    currentPost: any;
    

  constructor(public nav: NavController, public navParams: NavParams, public postData: PostData) {
    this.navParams = navParams;
    
    this.postData.getPostDetail(this.navParams.get('postId'))
  .on('value', (snapshot) => {
    this.currentPost = snapshot.val();
});
  }


}
