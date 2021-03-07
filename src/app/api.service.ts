import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) {
  }

  getList(queryParamName: string, mapKey: string): Observable<any[]> {
    const params = new HttpParams({
      fromObject: {
        [queryParamName]: 'list'
      }
    });
    return this.http.get<any>('/list.php', {params}).pipe(map(res => res.drinks.map(item => item[mapKey])));
  }

  getDrinks({api, queryParamName}, query) {
    const params = new HttpParams({
      fromObject: {
        [queryParamName]: query
      }
    });
    return this.http.get<any>(api, {params}).pipe(map(data => data.drinks));
  }

}
