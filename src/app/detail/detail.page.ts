import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Iptv } from '../models/iptv';
import { ActivatedRoute } from '@angular/router';
import { IptvService } from '../services/iptv.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {

  filme: Iptv;

  constructor(private iptvService: IptvService, private sanitizer: DomSanitizer, private rote: ActivatedRoute) { }

  ngOnInit() {
    this.rote.params.subscribe(param =>
      this.iptvService.findId(param['id']).subscribe(data => this.filme = data)
    );
  }

  getSafeUrl(url) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url)
  }

}
