import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import firebase from 'firebase';

//import { LoginPage } from '../pages/login/login';
import { SignupPage } from '../pages/signup/signup';

import { TabsPage } from '../pages/tabs/tabs';

@Component({
  template: '<ion-nav [root]="rootPage"></ion-nav>'
})

export class MyApp {
  rootPage: any = TabsPage; 
    
  constructor(platform: Platform) {
  
  
      firebase.initializeApp({
        apiKey: "AIzaSyCVRDRlyn7sq-wQZxJ7gv3Fltc8GTK8X3M",
        authDomain: "arcapp-38aef.firebaseapp.com",
        databaseURL: "https://arcapp-38aef.firebaseio.com",
        storageBucket: "arcapp-38aef.appspot.com",
        messagingSenderId: "1034436400559"
    });
    
    //auth observer to ensure correct state for auth object
    firebase.auth().onAuthStateChanged((user) => {
          if (!user) {
            this.rootPage = SignupPage;
          }
    });
    
    platform.ready().then(() => {
    
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
      StatusBar.overlaysWebView(true); 
      StatusBar.backgroundColorByHexString('#303f9f');
    });
    

  }
}
