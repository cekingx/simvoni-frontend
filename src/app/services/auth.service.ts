import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { baseUrl } from 'src/environments/environment';
import { User } from "../_models/user";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;
  private response: any = {}

  constructor(private http: HttpClient)
  {
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): User
  {
    return this.currentUserSubject.value;
  }

  login(username: string, password: string): Observable<any>
  {
    const reqHeader = new HttpHeaders({ 'Content-Type': 'application/json', 'No-Auth': 'True' });
    return this.http.post(`${baseUrl}/login`, {username, password}, { headers: reqHeader })
    .pipe(map(user => {
      this.response = user;
      localStorage.setItem('currentUser', JSON.stringify(this.response.data));
      this.currentUserSubject.next(this.response.data);
      return this.response.data;
    }))
  }

  register(name: string, username: string, password: string): Observable<any>
  {
    const reqHeader = new HttpHeaders({ 'Content-Type': 'application/json', 'No-Auth': 'True' });
    return this.http.post(`${baseUrl}/register`, { name, username, password }, { headers: reqHeader })
    .pipe(map(user => {
      this.response = user;
      return this.response;
    }))
  }

  logout()
  {
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
  }
}
