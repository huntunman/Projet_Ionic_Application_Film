import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FavoriteMovieProvider } from '../../providers/favorite-movie/favorite-movie';
//import { MovieListePage } from '../movie-list'
/**
 * Generated class for the MovieDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-movie-detail',
  templateUrl: 'movie-detail.html',
})
export class MovieDetailPage {
  movie;
  isFavorite: boolean = false;

  constructor(public navCtrl: NavController, 
    public navParams: NavParams, 
    private favoriteMovieProvider: FavoriteMovieProvider) {

      this.movie = this.navParams.get('movie');
      this.favoriteMovieProvider.isFavoriteMovie(this.movie.id)
       .then(value => (this.isFavorite = value));
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MovieDetailPage');
  }

  toggleFavorite(): void{
    this.isFavorite = !this.isFavorite;
    this.favoriteMovieProvider.toggleFavoriteMovie(this.movie);
  }

}
