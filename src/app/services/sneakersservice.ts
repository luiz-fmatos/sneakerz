import { Injectable } from '@angular/core';
import { Sneaker } from '../modelos/sneaker';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class SneakerService {
  private db: any;
  readonly ROOT_URL = '';

  constructor(private http: HttpClient) {
    this.db = localStorage;
    const sneakers = this.db.getItem('brands');
    if (!sneakers) {
      this.db.setItem('brands', JSON.stringify([]));
    }
  }

  getSneakers(): Observable<any> {
    const sneakers = JSON.parse(this.db.getItem('brands'));
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.http.get<any[]>(`${this.ROOT_URL}/produtos`, { headers: headers });
  }

  addSneakers(sneaker) {
    const sneakers = JSON.parse(this.db.getItem('sneakers'));
    sneaker.push(sneaker);
    this.db.setItem('brands', JSON.stringify(sneakers));
  }
  deleteSneakers(): Observable<any> {
    const sneakers = JSON.parse(this.db.getItem('sneakers'));
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.http.delete<any[]>(`${this.ROOT_URL}/produtos`, { headers: headers });
  }

}
