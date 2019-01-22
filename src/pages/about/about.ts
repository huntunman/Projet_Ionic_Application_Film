import { Component } from '@angular/core';
import { NavController} from 'ionic-angular';
import { BarcodeScanner, BarcodeScannerOptions } from '@ionic-native/barcode-scanner';
import { QRScannerStatus } from '@ionic-native/qr-scanner';
import { MovieApiProvider } from '../../providers/movie-api/movie-api';


@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  options: BarcodeScannerOptions;
  encodText:string='';
  createdCode = null;
  scannedCode = null;

  movies: any;
  movie_list: any;

  constructor(public navCtrl: NavController, 
    private barcodeScanner: BarcodeScanner,    
    private movieApiProvider: MovieApiProvider,
    private qrScanner: QRScanner
    ) {
  }

  ionViewDidLoad(): void {
    this.movieApiProvider.getMovies().subscribe(data => {
      this.movies = data;
      this.movies = this.movies.results;
      this.movie_list = data;
      this.movie_list = this.movie_list.results;
    })
    console.log('ionViewDidLoad MovieListPage');
  }
  // Qd nous entrons dans la page nous éxecutons la méthod showCamera()
  ionViewWillEnter(){
    this.showCamera();

    this.qrScanner.prepare()
    .then((status: QRScannerStatus) => {
      if (status.authorized) {
        console.log('Camera Permission Given');
         this.scanSub = this.qrScanner.scan().subscribe((text: string) => {
         console.log('Scanned something', text);
         this.qrScanner.hide();
         this.scanSub.unsubscribe(); 
        
        });

        this.qrScanner.show();
      } else if (status.denied) {
        console.log('Camera permission denied');
      } else {
        console.log('Permission denied for this runtime.');
      }
    })
    .catch((e: any) => console.log('Error is', e));
}
  }

  // Qd nous quittons dans la page nous éxecutons la méthod hideCamera()
  ionViewWillLeave(){
    this.hideCamera();
  }

  showCamera() {
    (window.document.querySelector('ion-app') as HTMLElement).classList.add('cameraView');
  }
  
  hideCamera() {
    (window.document.querySelector('ion-app') as HTMLElement).classList.remove('cameraView');
  }

  createCode(movie: string){
    this.barcodeScanner.encode(this.barcodeScanner.Encode.TEXT_TYPE, this.encodText)
      .then((movie) => {
        this.createdCode = movie;
      }).catch( (err) =>{
        console.log('Error: ', err);
      });
  }

  scanCode(){
    this.options={
      prompt: 'Scanner le QRCode'
    };
    this.barcodeScanner.scan(this.options).then(barcodeData => {
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

  /*this.qrScanner.prepare()
  .then((status: QRScannerStatus) => {
     if (status.authorized) {
       // camera permission was granted


       // start scanning
       let scanSub = this.qrScanner.scan().subscribe((text: string) => {
         console.log('Scanned something', text);

         this.qrScanner.hide(); // hide camera preview
         scanSub.unsubscribe(); // stop scanning
       });

     } else if (status.denied) {
       // camera permission was permanently denied
       // you must use QRScanner.openSettings() method to guide the user to the settings page
       // then they can grant the permission from there
     } else {
       // permission was denied, but not permanently. You can ask for permission again at a later time.
     }
  })
  .catch((e: any) => console.log('Error is', e));*/

}
