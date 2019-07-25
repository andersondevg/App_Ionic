import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  nome: String;

  constructor(public alertController: AlertController) {    
  }

  ngOnInit(): void {
    this.nome = '';
  }

  showAlert(){
    this.presentAlert();
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Alert',
      subHeader: 'Subtitle',
      message: `${this.nome}`,
      buttons: ['OK']
    });

    await alert.present();
  }

}
