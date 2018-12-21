import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { MyMoviesPage } from '../pages/my-movies/my-movies';
import { ContactPage } from '../pages/contact/contact';
import { MovieListPage } from '../pages/movie-list/movie-list';




@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  tab1Root = MovieListPage;
  tab2Root = MyMoviesPage;
  tab3Root = ContactPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}
