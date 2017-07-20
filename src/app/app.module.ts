import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import firebase from "firebase";

import { HttpModule} from '@angular/http';

import { MyApp } from './app.component';
import { WelcomePage } from '../pages/welcome/welcome';
import { LoginPage } from '../pages/login/login';
import { SignupPage } from '../pages/signup/signup';
import { LoginProvider } from '../providers/login/login';
import { TaskListItemComponent } from '../components/task-list-item/task-list-item';
import { TaskProvider } from '../providers/task/task';
import { TaskListPage } from "../pages/task-list/task-list";
import { TaskAddPage } from "../pages/task-add/task-add";
import { LovProvider } from '../providers/lov/lov';

const firebase_config = {
    apiKey: "AIzaSyBXn8Ac05xKKCloNK_YccLIt7-o7PRN4WM",
    authDomain: "listadordetarefas-f1b69.firebaseapp.com",
    databaseURL: "https://listadordetarefas-f1b69.firebaseio.com",
    projectId: "listadordetarefas-f1b69",
    storageBucket: "listadordetarefas-f1b69.appspot.com",
    messagingSenderId: "163985631789"
  };


@NgModule({
  declarations: [
    MyApp,
    WelcomePage,
    LoginPage,
    SignupPage,
    TaskListPage,
    TaskAddPage,
    TaskListItemComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    WelcomePage,
    LoginPage,
    SignupPage,
    TaskListPage,
    TaskAddPage,
    TaskListItemComponent,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    LoginProvider,
    TaskProvider,
    LovProvider,
  ]
})
export class AppModule {
  constructor(){
      firebase.initializeApp(firebase_config);
  }
}
