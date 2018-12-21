import { Component } from '@angular/core';

import { ContactPage } from '../contact/contact';
import { MovieListPage } from '../movie-list/movie-list';
import { MyMoviesPage } from '../my-movies/my-movies';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = MovieListPage;
  tab2Root = MyMoviesPage;
  tab3Root = ContactPage;

  constructor() {

  }
}
