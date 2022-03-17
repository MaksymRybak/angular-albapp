import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Imagazzino } from './magazino';

@Injectable({
  providedIn: 'root'
})
export class MagazzinoService {
  private URL = '../../assets/magazzino/magazzino.json';

  constructor(private http: HttpClient) { }

  getDatiMagazzino(): Observable<Imagazzino[]> {
    return this.http.get<Imagazzino[]>(this.URL);
  }

  getDatoMagazzino(id: number): Observable<Imagazzino | undefined> {
    return this.getDatiMagazzino()
      .pipe(
        map((products: Imagazzino[]) => products.find(p => p.idMerce === id))
      );
  }
}
