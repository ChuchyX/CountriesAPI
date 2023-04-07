import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { CountriesService } from 'src/app/services/countries.service';

@Component({
  selector: 'app-countries-detail',
  templateUrl: './countries-detail.component.html',
  styleUrls: ['./countries-detail.component.scss'],
})
export class CountriesDetailComponent implements OnInit, OnDestroy {
  countryParam!: string;
  country: any;
  private subscriptionParam!: Subscription;
  private subscriptionService!: Subscription;

  constructor(
    private route: ActivatedRoute,
    private countryService: CountriesService
  ) {}

  ngOnInit(): void {
    this.subscriptionParam = this.route.params.subscribe((params) => {
      this.countryParam = params['country'];
      this.subscriptionService = this.countryService
        .getCountry(this.countryParam.toLowerCase())
        .subscribe((c) => {
          this.country = c[0];
          console.log(this.country);
        });
    });
  }

  ngOnDestroy(): void {
    if (this.subscriptionParam) this.subscriptionParam.unsubscribe();
    if (this.subscriptionService) this.subscriptionService.unsubscribe();
  }
}
