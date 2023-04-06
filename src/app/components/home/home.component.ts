import { Component } from '@angular/core';
import { Country } from 'src/app/models/country';
import { CountriesService } from 'src/app/services/countries.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  countries: Country[] = [];
  searchText!: string;

  constructor(private countriesService: CountriesService){
    this.countriesService.getCountries().subscribe(r => {
      console.log(r);
      this.countries = r;
    })
  }
}
