import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CountriesService {
  constructor(private httpClient: HttpClient) {}

  getCountries(): Observable<any> {
    return this.httpClient.get('https://restcountries.com/v3.1/all');
  }

  getCountry(country: string): Observable<any> {
    return this.httpClient.get(
      'https://restcountries.com/v3.1/name/' + country
    );
  }
  getCountryByCode(code: string): Observable<any> {
    return this.httpClient.get('https://restcountries.com/v3.1/alpha/' + code.toLowerCase());
  }
}
