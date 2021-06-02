import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Election } from '@app/_models/election';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { baseUrl } from 'src/environments/environment';

@Injectable()
export class ElectionService {

  constructor(private http: HttpClient) { }

  getAvailableElection(): Observable<any>
  {
    return this.http.get<Election[]>(`${baseUrl}/voter/available-election`)
      .pipe(map((response: any) => {
        return response.data;
      }));
  }
}
