import { Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Country } from 'src/app/models/country';
import { CountriesService } from 'src/app/services/countries.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnDestroy {
  countriesCopy: Country[] = [];
  countries: Country[] = [];
  searchText!: string;
  private subscription!: Subscription;

  constructor(
    private countriesService: CountriesService,
    private router: Router
  ) {
    this.subscription = this.countriesService.getCountries().subscribe((r) => {
      this.countriesCopy = r;
      this.countries = r;
    });
  }

  filterByRegion(region: string) {
    this.countries = this.countriesCopy.filter((c) => c.region === region);
  }

  goToDetails(country: string) {
    this.router.navigate(['/details', country]);
  }
  ngOnDestroy(): void {
    if (this.subscription) this.subscription.unsubscribe();
  }
}
