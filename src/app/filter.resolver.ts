import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { forkJoin, Observable } from 'rxjs';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class FilterResolver implements Resolve<{ categories: string[]; glasses: string[]; ingredients: string[]; alcoholic: string[]; }> {

  constructor(private apiService: ApiService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
    Observable<{ categories: string[]; glasses: string[]; ingredients: string[]; alcoholic: string[]; }> {
    return forkJoin({
      categories: this.apiService.getList('c', 'strCategory'),
      glasses: this.apiService.getList('g', 'strGlass'),
      ingredients: this.apiService.getList('i', 'strIngredient1'),
      alcoholic: this.apiService.getList('a', 'strAlcoholic')
    });
  }
}
