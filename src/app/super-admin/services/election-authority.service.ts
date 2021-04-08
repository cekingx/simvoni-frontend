import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ElectionAuthority } from '@app/_models/ea';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { baseUrl } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ElectionAuthorityService {

  constructor(private http: HttpClient) { }

  getAllElectionAuthority(): Observable<any>
  {
    return this.http.get<ElectionAuthority[]>(`${baseUrl}/super-admin/election-authority`)
      .pipe(map((response: any) => {
        return response.data;
      }));
  }
}
