import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, pipe } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
	providedIn: 'root'
})
export class ApiService {
	baseUrl: string = 'https://jsonplaceholder.typicode.com/';

	constructor(private http: HttpClient) { }

	getPosts(): Observable<any> {
      return this.http.get<any>(this.baseUrl + 'posts')
      .pipe(
          map(data => {
              data;
              return data;
          })
      );
  }

  getAlbums(): Observable<any> {
    return this.http.get<any>(this.baseUrl + 'albums')
    .pipe(
        map(data => {
            data;
            return data;
        })
    );
  }

  getTodos(): Observable<any> {
    return this.http.get<any>(this.baseUrl + 'todos')
    .pipe(
        map(data => {
            data;
            return data;
        })
    );
  }

}
