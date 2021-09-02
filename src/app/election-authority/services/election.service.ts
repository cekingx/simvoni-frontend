import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AddCandidateDto } from '@app/_models/candidate';
import { CreateElectionDto } from '@app/_models/create-election.dto';
import { Election } from '@app/_models/election';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { baseUrl } from 'src/environments/environment';

@Injectable()
export class ElectionService {

  constructor(private http: HttpClient) { }

  getAllElection(): Observable<any>
  {
    return this.http.get<Election[]>(`${baseUrl}/election-authority/elections`)
      .pipe(map((response: any) => {
        return response.data;
      }));
  }

  createElection(createElectionDto: CreateElectionDto): Observable<any>
  {
    return this.http.post(`${baseUrl}/election-authority/election`, createElectionDto)
      .pipe(map((response: any) => {
        return response.data;
      }));
  }

  addCandidate(addCandidateDto: AddCandidateDto, electionId: number): Observable<any>
  {
    return this.http.post(`${baseUrl}/election-authority/add-candidate/${electionId}`, addCandidateDto)
      .pipe(map((response: any) => {
        return response.data;
      }));
  }

  getElectionById(electionId: number): Observable<any>
  {
    return this.http.get(`${baseUrl}/election-authority/election/${electionId}`)
      .pipe(map((response: any) => {
        return response.data;
      }));
  }

  getElectionParticipant(electionId: number): Observable<any>
  {
    return this.http.get(`${baseUrl}/election-authority/election-participant/${electionId}`)
      .pipe(map((response: any) => {
        return response.data;
      }));
  }

  acceptParticipation(participationId: number): Observable<any>
  {
    return this.http.post(`${baseUrl}/election-authority/election-participant/accept/${participationId}`, {})
      .pipe(map((response: any) => {
        return response.data;
      }));
  }

  rejectParticipation(participationId: number): Observable<any>
  {
    return this.http.post(`${baseUrl}/election-authority/election-participant/reject/${participationId}`, {})
      .pipe(map((response: any) => {
        return response.data;
      }));
  }

  startElection(electionId: number): Observable<any>
  {
    return this.http.post(`${baseUrl}/election-authority/start-election/${electionId}`, {})
      .pipe(map((response: any) => {
        return response.data;
      }));
  }

  endElection(electionId: number): Observable<any>
  {
    return this.http.post(`${baseUrl}/election-authority/end-election/${electionId}`, {})
      .pipe(map((response: any) => {
        return response.data;
      }));
  }
}
