import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Election } from '@app/_models/election';
import { FollowedElection } from '@app/_models/followed-electon';
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

  getFollowedElection(): Observable<any>
  {
    return this.http.get<FollowedElection[]>(`${baseUrl}/voter/followed-election`)
      .pipe(map((response: any) => {
        return response.data;
      }));
  }

  getEndedElection(): Observable<any>
  {
    return this.http.get<Election[]>(`${baseUrl}/voter/ended-election`)
      .pipe(map((response: any) => {
        return response.data;
      }));
  }

  joinElection(electionId: number): Observable<any>
  {
    return this.http.post<Election>(`${baseUrl}/voter/join/${electionId}`, {})
      .pipe(map((response: any) => {
        return response.data;
      }));
  }
}
