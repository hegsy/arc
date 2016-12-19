import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import firebase from 'firebase';

import { LoginPage } from '../pages/login/login';
import { HomePage } from '../pages/home/home';

@Component({
  template: '<ion-nav [root]="rootPage"></ion-nav>'
})

export class MyApp {
  rootPage: any = HomePage;

  constructor(platform: Platform) {
  
      firebase.initializeApp({
        apiKey: "AIzaSyCVRDRlyn7sq-wQZxJ7gv3Fltc8GTK8X3M",
        authDomain: "arcapp-38aef.firebaseapp.com",
        databaseURL: "https://arcapp-38aef.firebaseio.com",
        storageBucket: "arcapp-38aef.appspot.com",
        messagingSenderId: "1034436400559"
    });
    
    firebase.auth().onAuthStateChanged((user) => {
          if (!user) {
            this.rootPage = LoginPage;
          }
    });
    
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
    

  }
}
