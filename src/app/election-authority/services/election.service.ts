import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
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
}
