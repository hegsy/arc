import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PostData } from '../../providers/post-data';

/*
  Generated class for the PostCreate page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-post-create',
  templateUrl: 'post-create.html'
})
export class PostCreatePage {

  constructor(public nav: NavController, public postData: PostData,) {
  
    this.nav = nav;
    this.postData = postData;
  }

createPost(postName: string, postCategory: string, postContent: string) {
    this.postData.createPost(postName, postCategory, postContent).then(() => {
        this.nav.pop();
        //to go back to TabsPage
    });
}

}
