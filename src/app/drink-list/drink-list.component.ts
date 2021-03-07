import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { ActivatedRoute } from '@angular/router';
import { Filter } from '../types/filter';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { MatSelectChange } from '@angular/material/select';

@Component({
  selector: 'app-drink-list',
  templateUrl: './drink-list.component.html',
  styleUrls: ['./drink-list.component.scss']
})
export class DrinkListComponent implements OnInit {
  filters: any;
  filterOptions = [
    {
      type: Filter.Alcoholic,
      api: '/filter.php',
      queryParamName: 'a'
    },
    {
      type: Filter.Categories,
      api: '/filter.php',
      queryParamName: 'c'
    },
    {
      type: Filter.Ingredients,
      api: '/filter.php',
      queryParamName: 'i'
    },
    {
      type: Filter.Glasses,
      api: '/filter.php',
      queryParamName: 'g'
    },
    {
      type: Filter.Name,
      api: '/search.php',
      queryParamName: 's'
    },
    {
      type: Filter.FirstLetter,
      api: '/search.php',
      queryParamName: 'f'
    }];
  selectedOption = this.filterOptions[0];
  searchBy: string;
  Filter = Filter;
  cocktails$: Observable<any>;
  loading = false;

  constructor(private apiService: ApiService,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.filters = this.route.snapshot.data.filters;
    this.searchBy = this.filters.alcoholic[0];
    this.getData();
  }

  getData() {
    if (!this.selectedOption || !this.searchBy) {
      return;
    }

    this.loading = true;
    this.cocktails$ = this.apiService.getDrinks(this.selectedOption, this.searchBy).pipe(tap(data => this.loading = false));
  }

  selectionChange(event: MatSelectChange) {
    switch (event.value.type) {
      case Filter.Alcoholic:
        this.searchBy = this.filters.alcoholic[0];
        break;
      case Filter.Ingredients:
        this.searchBy = this.filters.ingredients[0];
        break;
      case Filter.Categories:
        this.searchBy = this.filters.categories[0];
        break;
      case Filter.Glasses:
        this.searchBy = this.filters.glasses[0];
        break;
      case Filter.Name:
      case Filter.FirstLetter:
        this.searchBy = null;
        break;
    }
  }

}
