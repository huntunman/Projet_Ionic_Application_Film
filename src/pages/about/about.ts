import { Component } from '@angular/core';
import { NavController} from 'ionic-angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { MovieApiProvider } from '../../providers/movie-api/movie-api';
//import { MovieDetailPage } from '../movie-detail/movie-detail';



@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  createdCode = null;
  scannedCode = null;

  movies: any;
  movie_list: any;

  constructor(public navCtrl: NavController, 
    private barcodeScanner: BarcodeScanner,    
    private movieApiProvider: MovieApiProvider
    ) {
  }

  ionViewDidLoad() {
    this.movieApiProvider.getMovies().subscribe(data => {
      this.movies = data;
      this.movies = this.movies.results;
      this.movie_list = data;
      this.movie_list = this.movie_list.results;
    })
    console.log('ionViewDidLoad MovieListPage');
  }

  createCode(movie){
    this.createdCode = movie.toString();
  }

  scanCode(){
    this.barcodeScanner.scan().then(barcodeData => {
      this.scannedCode = barcodeData;
    }, (err) => {
        console.log('Error: ', err);
    });
  }

  initializeMovies() {
    this.movies = this.movie_list;
  }

  getMovie(ev: any) {
    // Reset items back to all of the items
    this.initializeMovies();

    // set val to the value of the searchbar
    const val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.movies = this.movies.filter((movie) => {
        return (movie.title.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }

}
