import { Component } from '@angular/core';
import { IptvService } from '../services/iptv.service';
import { Iptv } from '../models/iptv';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  texto: String;
  filmes: Iptv[];

  constructor(private iptvService: IptvService) {         
  }

  ngOnInit(): void {
    this.texto = '';
    this.consultar();
  }

  consultar(){
    this.iptvService.getAll().subscribe(
      values => {
        this.filmes = values;
      }
    );
  }

  getNameFormat(name:String){
    return name.substring(0, 22).concat('...');
  }

  filtrar(){
    console.log(this.texto);
  }

}
