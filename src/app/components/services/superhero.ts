import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, forkJoin } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SuperheroService {
  private accessToken = 'cfaf2de51642f2ab53df3cb286607291';
  private baseUrl = `https://superheroapi.com/api/${this.accessToken}`;

  // CORS Proxy URL — using a public proxy for quick testing
  private corsProxy = 'https://api.allorigins.win/raw?url=';

  constructor(private http: HttpClient) {}

  getHeroById(id: number): Observable<any> {
  const url = `${this.corsProxy}${encodeURIComponent(`${this.baseUrl}/${id}`)}`;
  return this.http.get(url);
  }

  getHeroes(ids: number[]): Observable<any[]> {
    const requests = ids.map(id => this.getHeroById(id));
    return forkJoin(requests);
  }
}
