import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MovieDetailPage } from '../movie-detail/movie-detail';
import { MovieApiProvider } from '../../providers/movie-api/movie-api';

/**
 * Generated class for the MovieListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-movie-list',
  templateUrl: 'movie-list.html',
})
export class MovieListPage {
  movies: any = [];
  movie: any;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private movieApiProvider: MovieApiProvider
  ) { }

  // Indique que la page à été ajoutée et chargé dans la mémoire (en cache)
  ionViewDidLoad() {
    this.movieApiProvider.getMovies().subscribe(data => {
      this.movies = data;
      this.movies = this.movies.results;
    })
    console.log('ionViewDidLoad MovieListPage');
  }
  // On ajoute en fin de liste la page MovieList (MovieDetails) dans la file "d'action" ce qui nous fait aller sur cette page
  goToDetail(movie){
    this.navCtrl.push(MovieDetailPage, {movie});
  }

  initializeMovie() {
    this.movie = this.movies;
  }

  getMovie(ev: any) {
    // Reset items back to all of the items
    this.initializeMovie();

    // set val to the value of the searchbar
    const val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.movie = this.movies.filter((movie) => {
        return (movie.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }
}
