import { 
  NavController, 
  LoadingController, 
  AlertController } from 'ionic-angular';
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

import { TabsPage } from '../tabs/tabs';
import { LoginPage } from '../login/login';

import { AuthData } from '../../providers/auth-data';

@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html'
})
export class SignupPage {
    public signupForm;
      emailChanged: boolean = false;
      passwordChanged: boolean = false;
      submitAttempt: boolean = false;
      loading: any;

  constructor(public nav: NavController, public authData: AuthData, public formBuilder: FormBuilder, public loadingCtrl: LoadingController, public alertCtrl: AlertController) {
  
    this.signupForm = formBuilder.group({
      email: ['', Validators.compose([Validators.required])],
      password: ['', Validators.compose([Validators.minLength(6), Validators.required])]
    })
  }
  
elementChanged(input){
    let field = input.inputControl.name;
    this[field + "Changed"] = true;
  }
  
  signupUser(){
  this.submitAttempt = true;

  if (!this.signupForm.valid){
    console.log(this.signupForm.value);
  } else {
    this.authData.signupUser(this.signupForm.value.email, this.signupForm.value.password).then(() => {
      this.nav.setRoot(TabsPage);
    }, (error) => {
      this.loading.dismiss();
      let alert = this.alertCtrl.create({
        message: error.message,
        buttons: [
          {
            text: "Ok",
            role: 'cancel'
          }
        ]
      });
      alert.present();
    });

    this.loading = this.loadingCtrl.create({
    dismissOnPageChange: true,
    });
    this.loading.present();
  }
}

  ionViewDidLoad() {
    console.log('Hello SignupPage Page');
  }
  
  goToLogin(){
    this.nav.push(LoginPage);
  }

}
