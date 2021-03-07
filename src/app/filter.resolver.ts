import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { forkJoin, Observable } from 'rxjs';
import { ApiService } from './api.service';
import { FilterNode } from './types/filter-node';

@Injectable({
  providedIn: 'root'
})
export class FilterResolver implements Resolve<{ categories: FilterNode[]; glasses: FilterNode[]; ingredients: FilterNode[]; alcoholic: FilterNode[]; }> {

  constructor(private apiService: ApiService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
    Observable<{ categories: FilterNode[]; glasses: FilterNode[]; ingredients: FilterNode[]; alcoholic: FilterNode[]; }> {
    return forkJoin({
      categories: this.apiService.getCategoriesFilter(),
      glasses: this.apiService.getGlassesFilter(),
      ingredients: this.apiService.getIngredientsFilter(),
      alcoholic: this.apiService.getAlcoholicFilter()
    });
  }
}
