import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MovieDetailPage } from './movie-detail';
import { NgxQRCodeModule } from 'ngx-qrcode2';
import { QRCodeModule } from 'angularx-qrcode/dist/angularx-qrcode.module';
import { IonicStorageModule } from '@ionic/storage';
import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner';


@NgModule({
  declarations: [
    MovieDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(MovieDetailPage),
    IonicStorageModule.forRoot(),
    NgxQRCodeModule,
    QRCodeModule,
  ],
})
export class MovieDetailPageModule {}
