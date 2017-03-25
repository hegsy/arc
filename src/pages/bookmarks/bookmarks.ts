import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';


import { BookmarkData } from '../../providers/bookmark-data';

@Component({
  selector: 'page-bookmarks',
  templateUrl: 'bookmarks.html'
})
export class BookmarksPage {

  public bookmarks: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public bookmarkData: BookmarkData) {
    this.navParams = navParams;
    this.bookmarkData = bookmarkData;
  }

  ionViewDidLoad (){

    this.bookmarkData.getBookmarks().on('value', snapshot => {
        let rawList = [];
        snapshot.forEach( snap => {
            rawList.push({
                id:snap.key,
                title: snap.val().title,
                desc: snap.val().desc

            });
        });
        this.bookmarks = rawList;
    });
  }

  deleteBookmark(bookmarkId) {
    this.bookmarkData.deleteBookmark(bookmarkId).then(() => {
        this.navCtrl.pop();
        //to go back to TabsPage
    });
    

      }

}
