import { Pipe, PipeTransform } from '@angular/core';
import { Country } from '../models/country';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(countries: Country[], searchText: string): Country[] {
    if (!countries) return [];
    if (!searchText) return countries;
    searchText = searchText.toLowerCase();
    return countries.filter(c => c.name.common.toLowerCase().includes(searchText));
  }

}
