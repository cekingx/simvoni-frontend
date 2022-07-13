import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Election } from '@app/_models/election';
import { ElectionDetail } from '@app/_models/election-detail';
import { EndedElection } from '@app/_models/ended-election';
import { FollowedElection } from '@app/_models/followed-election';
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

  getElectionDetail(electionId: number): Observable<any>
  {
    return this.http.get<ElectionDetail>(`${baseUrl}/voter/election-detail/${electionId}`)
      .pipe(map((response: any) => {
        return response.data;
      }));
  }

  getEndedElectionDetail(electionId: number): Observable<any>
  {
    return this.http.get<EndedElection>(`${baseUrl}/voter/ended-election-detail/${electionId}`)
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

  voteOnElection(electionId: number, candidateId: number): Observable<any>
  {
    return this.http.post(`${baseUrl}/voter/vote/${electionId}`, { candidate_id: candidateId })
      .pipe(map((response: any) => {
        return response.data;
      }));
  }

  abstain(electionId: number): Observable<any>
  {
    return this.http.post(`${baseUrl}/voter/vote/${electionId}/abstain`, {})
    .pipe(map((response: any) => {
      return response.data;
    }));
  }
}
