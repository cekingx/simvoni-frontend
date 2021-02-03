import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from "@angular/common/http";

import { AuthService } from '../services/auth.service';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
    constructor(private authService: AuthService) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>
    {
        return 
    }
}