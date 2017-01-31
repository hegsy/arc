import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';
import { NavController } from 'ionic-angular';
import { IntroPage } from '../intro/intro';

import { HomePage } from '../home/home';
import { ProfilePage } from '../profile/profile';
import { PostsPage } from '../posts/posts';
import { TasksPage } from '../tasks/tasks';
import { CameraPage } from '../camera/camera';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = HomePage;
  tab2Root: any = ProfilePage;
  tab3Root: any = PostsPage;
  tab4Root: any = TasksPage;
  tab5Root: any = CameraPage;

  constructor() {}

}
