import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MovieListPage } from '../movie-list/movie-list';
import { FavoriteMovieProvider } from '../../providers/favorite-movie/favorite-movie';

/**
 * Generated class for the MyMoviesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-my-movies',
  templateUrl: 'my-movies.html',
})
export class MyMoviesPage {
  favoriteMovies;

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    private favoriteMovieProvider: FavoriteMovieProvider) 
    {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MyMoviesPage');
  }

  ionViewWillEnter(){
    this.initFavoriteMovies();
  }

  private initFavoriteMovies(){
    this.favoriteMovieProvider.getFavoriteMovie()
     .then(favs => (this.favoriteMovies = favs));
  }

  findMovie(){
    this.navCtrl.push(MovieListPage);
  }
}
