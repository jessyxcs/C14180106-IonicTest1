import { Component } from '@angular/core';
import { FotoService, Photo } from '../services/foto.service';
import { AlertController } from '@ionic/angular';
import { AngularFireStorage } from '@angular/fire/storage';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
})
export class Tab2Page {
  constructor(
    public fotoService: FotoService,
    public alertController: AlertController,
    private afStorage: AngularFireStorage
  ) {}

  async ngOnInit() {
    await this.fotoService.loadFoto();
  }

  TambahFoto() {
    this.fotoService.tambahFoto();
  }

  async uploadCloud(data: Photo) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Upload To Cloud',
      message: 'Do you want to upload this photo?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          },
        },
        {
          text: 'Upload',
          handler: () => {
            this.fotoService.urlImageStorage = [];
            console.log(data.dataImage);
            const imgFilePath = `imgStorage/${data.filePath}`;
            this.afStorage.upload(imgFilePath, data.dataImage).then(() => {
              this.afStorage.storage
                .ref()
                .child(imgFilePath)
                .getDownloadURL()
                .then((url) => {
                  this.fotoService.pushUrlImage(url);
                });
            });
            console.log('Confirm Okay');
          },
        },
      ],
    });

    await alert.present();
  }
}
