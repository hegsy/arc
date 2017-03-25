import { Injectable } from '@angular/core';
import firebase from 'firebase';

@Injectable()
export class BookmarkData {

	public bookmarks: any;

	bookmarksRef: any = firebase.database().ref('bookmarks');

  constructor() {
    console.log('Hello BookmarkData Provider');

    this.bookmarks = firebase.database().ref('/bookmarks');
  }

  createBookmark(title: string, desc: string): any {
    
    return this.bookmarks.push({
        title: title,
        desc: desc,
       }).then(newBookmark => {
    this.bookmarks.child(newBookmark.key).child('id').set(newBookmark.key);
    });
    
}

  getBookmarks(): any {
    return this.bookmarks;
  }


deleteBookmark(bookmarkId): any {
    return this.bookmarks.child(bookmarkId).remove();
  }

}
