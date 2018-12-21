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
  // Constructeur de la page des favoris
  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    private favoriteMovieProvider: FavoriteMovieProvider) 
    {

  }

  // Indique que la page à été ajoutée et chargé dans la mémoire (en cache)
  ionViewDidLoad() {
    console.log('ionViewDidLoad MyMoviesPage');
  }

  // Initialisation de la page avant de l'affiche
  ionViewWillEnter(){
    this.initFavoriteMovies();
  }

  private initFavoriteMovies(){
    this.favoriteMovieProvider.getFavoriteMovie()
     .then(favs => (this.favoriteMovies = favs));
  }
  // On ajoute en fin de liste la page MovieList (Home) dans la file "d'action" ce qui nous fait aller sur cette page
  findMovie(){
    this.navCtrl.push(MovieListPage);
  }

  // On ajoute en fin de liste la page MovieList (MovieDetails) dans la file "d'action" ce qui nous fait aller sur cette page
  goToDetail(movie){
    this.navCtrl.push(MovieDetailPage, {movie});
  }
}
