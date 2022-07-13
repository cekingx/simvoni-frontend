import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { baseUrl } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  upgradeRole(id: number): Observable<any>
  {
    return this.http.post<any>(`${baseUrl}/super-admin/upgrade-role/${id}`, {})
      .pipe(map((response: any) => {
        return response;
      }))
  }

  getUpgradeRoleList(): Observable<any>
  {
    return this.http.get<any>(`${baseUrl}/super-admin/upgrade-role`)
      .pipe(map((response: any) => {
        return response.data;
      }))
  }
}
