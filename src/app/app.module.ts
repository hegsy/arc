import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

//Import Pages 

import { ProfilePage } from '../pages/profile/profile';
import { EditProfilePage } from '../pages/edit-profile/edit-profile';
import { PostsPage } from '../pages/posts/posts';
import { TasksPage } from '../pages/tasks/tasks';
import { CameraPage } from '../pages/camera/camera';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';
import { SignupPage } from '../pages/signup/signup';
import { ResetPasswordPage } from '../pages/reset-password/reset-password';
import { PostCreatePage } from '../pages/post-create/post-create';
import { PostDetailPage } from '../pages/post-detail/post-detail';
import { PostListPage } from '../pages/post-list/post-list';

//import providers

import { AuthData } from '../providers/auth-data';
import { PostData } from '../providers/post-data';
import { ProfileData } from '../providers/profile-data';

@NgModule({
  declarations: [
    MyApp,
    ProfilePage,
    EditProfilePage,
    PostsPage,
    TasksPage,
    CameraPage,
    HomePage,
    TabsPage,
    LoginPage,
    SignupPage,
    ResetPasswordPage,
    PostDetailPage,
    PostListPage,
    PostCreatePage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ProfilePage,
    EditProfilePage,
    PostsPage,
    TasksPage,
    CameraPage,
    HomePage,
    TabsPage,
    LoginPage,
    SignupPage,
    ResetPasswordPage,
    PostDetailPage,
    PostListPage,
    PostCreatePage
  ],
  providers: [
      {provide: ErrorHandler, useClass: IonicErrorHandler}, 
      AuthData, 
      ProfileData, 
      PostData
  ]
})
export class AppModule {}
