import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MovieListPage } from '../movie-list/movie-list';
import { MovieDetailPage } from '../movie-detail/movie-detail';
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
// Page Favoris
export class MyMoviesPage {
  // Liste des films favoris
  favoriteMovies: any;
  movie: any;

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
  goToDetail(movie){
    this.navCtrl.push(MovieDetailPage, {movie});
  }
}
