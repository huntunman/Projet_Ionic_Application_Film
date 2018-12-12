import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MovieDetailPage } from '../movie-detail/movie-detail';

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
  public movies = [
    {
      vote_count: 666,
      id: 19404,
      video: false,
      vote_average: 9.1,
      title: "Dilwale Dulhania Le Jayenge",
      popularity: 50.154262,
      poster_path:
        "https://image.tmdb.org/t/p/w185/2gvbZMtV1Zsl7FedJa5ysbpBx2G.jpg",
      original_language: "hi",
      original_title: "Dilwale Dulhania Le Jayenge",
      genre_ids: [35, 18, 10749],
      backdrop_path: "/nl79FQ8xWZkhL3rDr1v2RFFR6J0.jpg",
      adult: false,
      overview:
        "Chaudhry Baldev Singh est un père de famille installé à Londres. Un jour, il reçoit une lettre d'Inde : son meilleur ami lui écrit, lui rappelant la promesse qu'il avait faite deux décennies auparavant de marier leurs enfants. Chaudhry décide alors de tenir sa promesse, mais donne toutefois un mois libre à sa fille  avant qu'elle ne s'en aille en Inde se marier...",
      release_date: "1995-10-20"
    },
    {
      vote_count: 8482,
      id: 278,
      video: false,
      vote_average: 8.5,
      title: "Les Évadés",
      popularity: 76.107673,
      poster_path:
        "https://image.tmdb.org/t/p/w185/5cIUvCJQ2aNPXRCmXiOIuJJxIki.jpg",
      original_language: "en",
      original_title: "The Shawshank Redemption",
      genre_ids: [18, 80],
      backdrop_path: "/xBKGJQsAIeweesB79KC89FpBrVr.jpg",
      adult: false,
      overview:
        "En 1947, Andy Dufresne, un jeune banquier, est condamné à la prison à vie pour le meurtre de sa femme et de son amant. Ayant beau clamer son innocence, il est emprisonné à Shawshank, le pénitencier le plus sévère de l'Etat du Maine. Il y fait la rencontre de Red, un Noir désabusé, détenu depuis vingt ans. Commence alors une grande histoire d'amitié entre les deux hommes...",
      release_date: "1994-09-23"
    },
    {
      vote_count: 1099,
      id: 372058,
      video: false,
      vote_average: 8.5,
      title: "Your Name",
      popularity: 57.569033,
      poster_path:
        "https://image.tmdb.org/t/p/w185/xq1Ugd62d23K2knRUx6xxuALTZB.jpg",
      original_language: "ja",
      original_title: "君の名は。",
      genre_ids: [10749, 16, 18],
      backdrop_path: "/7OMAfDJikBxItZBIug0NJig5DHD.jpg",
      adult: false,
      overview:
        "Mitsuha est une lycéenne, la fille du maire d'une petite ville nichée entre les montagnes. Vivant avec sa petite sœur et sa grand-mère, c'est une demoiselle franche qui n'hésite pas à dire qu'elle n'a pas envie de participer aux rituels shinto, ou d'aider son père dans ses campagnes électorales. En fait, elle rêve de pouvoir quitter cette ville où elle s'ennuie, pour partir tenter sa chance à la capitale...",
      release_date: "2016-08-26"
    }
  ];

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams
  ) {  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MovieListPage');
  }

  goToDetail(movie){
    this.navCtrl.push(MovieDetailPage, {movie});
  }

}
