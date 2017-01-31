import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';

/*
  Generated class for the Intro page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-intro',
  templateUrl: 'intro.html'
})
export class IntroPage {

	 sliderOptions: any;

  constructor(public navCtrl: NavController) {
  	 this.sliderOptions = {
      pager: true
    };
  }

  ionViewDidLoad() {
    console.log('Hello IntroPage Page');
  }

  goToHome(){
    this.navCtrl.setRoot(TabsPage);
  }

}
