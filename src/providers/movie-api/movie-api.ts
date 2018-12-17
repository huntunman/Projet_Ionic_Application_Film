import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Platform } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';

/*
  Generated class for the MovieApiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MovieApiProvider {
  private baseUrl: string = "https://api.themoviedb.org/movie/550?api_key=978094bc2f3c69b0c6122361ddf6fa13";

  constructor(private readonly http: HttpClient, private readonly plateform: Platform) {
    console.log('Hello MovieApiProvider Provider');
    /*if (this.plateform.is("cordova") && this.plateform.is("android")){
      this.baseUrl = "/android_asset/www/asset/api/fichiers"
    }*/
  }

  getMovies(): Observable <any> {
    return this.http.get(`${this.baseUrl}`);
  }

}
