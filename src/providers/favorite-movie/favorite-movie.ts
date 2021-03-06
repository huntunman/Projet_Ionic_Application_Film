import { HttpClient } from '@angular/common/http';
import { Storage } from '@ionic/storage';
import { Injectable } from '@angular/core';
//import { IonicStorageModule } from '@ionic/storage';


/*
  Generated class for the FavoriteMovieProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
const MOVIE_KEY = "movie_"
@Injectable()
export class FavoriteMovieProvider {

  constructor(public http: HttpClient, private storage: Storage) {
    console.log('Hello FavoriteMovieProvider Provider');
  }

  addFavoriteMovie(movie){
    this.storage.set(this.getMovieKey(movie), JSON.stringify(movie));
  }

  removeFavoriteMovie(movie){
    this.storage.remove(this.getMovieKey(movie));
  }

  isFavoriteMovie(movie){
    return this.storage.get(this.getMovieKey(movie));
  }

  toggleFavoriteMovie(movie){
    this.isFavoriteMovie(movie).then(
      isFavorite => isFavorite ? this.removeFavoriteMovie(movie) :
      this.addFavoriteMovie(movie)
    );
  }

  getMovieKey(movie){
    return MOVIE_KEY + movie.title;
  }

  getFavoriteMovie(): Promise<any> {
    return new Promise(resolve => {
      let results: any = [];
      this.storage.keys()
       .then(keys => keys.filter(key =>key.includes(MOVIE_KEY))
        .forEach(key => this.storage.get(key).then(data => results.push(JSON.parse(data)))
        )
      );
      return resolve(results);
    });
  }
}
