import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { Storage } from '@ionic/storage';


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
import { TaskListPage } from '../pages/task-list/task-list';
import { ReportPage } from '../pages/report/report';
import { LeaderboardPage } from '../pages/leaderboard/leaderboard';
import { CommentsPage } from '../pages/comments/comments';
import { CommentCreatePage } from '../pages/comment-create/comment-create';
import { IntroPage } from '../pages/intro/intro';


//import providers

import { AuthData } from '../providers/auth-data';
import { PostData } from '../providers/post-data';
import { ProfileData } from '../providers/profile-data';
import { CommentData } from '../providers/comment-data';

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
    PostCreatePage,
    TaskListPage,
    ReportPage,
    LeaderboardPage,
    CommentsPage,
    CommentCreatePage,
    IntroPage

  ],
  imports: [
    IonicModule.forRoot(MyApp, {
      backButtonText: ''
      
    }, {}
  )],
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
    PostCreatePage,
    TaskListPage,
    ReportPage,
    LeaderboardPage,
    CommentsPage,
    CommentCreatePage,
    IntroPage
    
  ],
  providers: [
      Storage,
      {provide: ErrorHandler, useClass: IonicErrorHandler}, 
      AuthData, 
      ProfileData, 
      PostData,
      CommentData
  ]
})
export class AppModule {}
