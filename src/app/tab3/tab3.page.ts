import { Component } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { Router } from '@angular/router';
import { FotoService } from '../services/foto.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
})
export class Tab3Page {
  constructor(
    private afStorage: AngularFireStorage,
    public fotoService: FotoService,
    private router: Router
  ) {}

  photoName = this.fotoService.namaFoto;

  async ionViewDidEnter() {
    await this.fotoService.loadFoto();
    this.tampilkanData();
  }

  tampilkanData() {
    this.fotoService.urlImageStorage = [];
    var refImage = this.afStorage.storage.ref('imgStorage');
    refImage
      .listAll()
      .then((res) => {
        res.items.forEach((itemRef) => {
          itemRef.getDownloadURL().then((url) => {
            this.fotoService.pushUrlImage(url);
          });
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  toTab4(iFoto: string) {
    this.router.navigate(['/tab4', iFoto]);
  }
}
