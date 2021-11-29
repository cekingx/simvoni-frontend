import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CreateEaDto } from '@app/_models/create-ea.dto';
import { ElectionAuthority } from '@app/_models/ea';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { baseUrl } from 'src/environments/environment';
import { SuperAdminModule } from '../super-admin.module';

@Injectable()
export class ElectionAuthorityService {

  constructor(private http: HttpClient) { }

  getAllElectionAuthority(): Observable<any>
  {
    return this.http.get<ElectionAuthority[]>(`${baseUrl}/super-admin/election-authority`)
      .pipe(map((response: any) => {
        return response.data;
      }));
  }

  getElectionAuthorityById(id: number): Observable<any>
  {
    return this.http.get<ElectionAuthority>(`${baseUrl}/super-admin/election-authority/${id}`)
      .pipe(map((response: any) => {
        return response.data;
      }));
  }

  createElectionAuthority(createEaDto: CreateEaDto): Observable<any>
  {
    return this.http.post(`${baseUrl}/super-admin/election-authority`, createEaDto);
  }

  setWalletAddress(userId: number): Observable<any>
  {
    return this.http.post(`${baseUrl}/super-admin/election-authority/set-wallet-address/${userId}`, {})
      .pipe(map((response: any) => {
        return response.data
      }))
  }
}
