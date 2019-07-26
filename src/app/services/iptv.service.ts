import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Iptv } from '../models/iptv';

@Injectable({
  providedIn: 'root'
})
export class IptvService {  

  constructor(private http: HttpClient) {     
  }

  getAll(){
    return this.http.get<Iptv[]>('http://10.0.0.71:8500/iptvs');
  }

  findId(id){
    return this.http.get<Iptv>('http://10.0.0.71:8500/iptvs/' + id);
  }
}
