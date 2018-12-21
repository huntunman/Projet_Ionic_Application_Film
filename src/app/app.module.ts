import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { IonicStorageModule } from '@ionic/storage';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { MyMoviesPageModule } from '../pages/my-movies/my-movies.module';
import { MovieListPageModule } from '../pages/movie-list/movie-list.module';
import { MovieDetailPageModule } from '../pages/movie-detail/movie-detail.module';
import { MovieApiProvider } from '../providers/movie-api/movie-api';
import { HttpClientModule } from '@angular/common/http';
import { FavoriteMovieProvider } from '../providers/favorite-movie/favorite-movie';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    MyMoviesPageModule,
    MovieListPageModule,
    MovieDetailPageModule,
    HttpClientModule

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    MovieApiProvider,
    MovieApiProvider,
    FavoriteMovieProvider
  ]
})
export class AppModule {}
