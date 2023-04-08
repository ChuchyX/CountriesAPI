import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { CountriesService } from 'src/app/services/countries.service';

@Component({
  selector: 'app-countries-detail',
  templateUrl: './countries-detail.component.html',
  styleUrls: ['./countries-detail.component.scss'],
})
export class CountriesDetailComponent implements OnInit, OnDestroy {
  countryParam!: string;
  country: any;
  bordersCountries: any[] = [];
  private subscriptionParam!: Subscription;
  private subscriptionService!: Subscription;
  private subscriptionService2!: Subscription;

  constructor(
    private route: ActivatedRoute,
    private countryService: CountriesService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.subscriptionParam = this.route.params.subscribe((params) => {
      this.countryParam = params['country'];     
      this.subscriptionService = this.countryService
        .getCountry(this.countryParam.toLowerCase())
        .subscribe((c) => {
          this.country = c[0];
          this.bordersCountries = []; 
          for (let index = 0; index < this.country.borders.length; index++) {
            this.subscriptionService2 = this.countryService.getCountryByCode(this.country.borders[index]).subscribe(bc => {
              this.bordersCountries.push(bc[0]);
            })       
          }
        });
    });
  }

  goToDetails(country: string) {
    this.router.navigate(['/details', country]);
  }

  ngOnDestroy(): void {
    if (this.subscriptionParam) this.subscriptionParam.unsubscribe();
    if (this.subscriptionService) this.subscriptionService.unsubscribe();
    if (this.subscriptionService2) this.subscriptionService2.unsubscribe();
  }
}
