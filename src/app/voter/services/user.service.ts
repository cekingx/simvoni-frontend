import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { baseUrl } from 'src/environments/environment';

@Injectable()
export class UserService {

  constructor(private http: HttpClient) { }

  getUpgradeRoleStatus(): Observable<any>
  {
    return this.http.get<any>(`${baseUrl}/voter/upgrade-role/status`)
      .pipe(map((response: any) => {
        return response;
      }))
  }

  upgradeRole(): Observable<any>
  {
    return this.http.post<any>(`${baseUrl}/voter/upgrade-role`, {})
      .pipe(map((response: any) => {
        return response;
      }))
  }
}
