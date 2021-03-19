import { Component, HostBinding, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { LoadingService } from "../services/loading.service";
import { Router } from "@angular/router";
import { first } from "rxjs/operators";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  @HostBinding('class') class = 'd-flex flex-column flex-root svg-background';
  loginForm: FormGroup;
  submitted = false;
  error = '';

  constructor(
    private authService: AuthService,
    private loadingService: LoadingService,
    private router: Router
  ) 
  { }

  ngOnInit() {
    this.initForm();
  }

  initForm()
  {
    this.loginForm = new FormGroup({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    });
  }

  get f()
  {
    return this.loginForm.controls;
  }

  onSubmit()
  {
    this.submitted = true;

    if (this.loginForm.invalid) {
      return;
    }

    this.loadingService.showLoading();
    this.authService.login(this.f.username.value, this.f.password.value)
      .pipe(first())
      .subscribe(
        result => {
          let role = result.role;
          this.redirectToRoute(role);
          this.loadingService.hideLoading();
        },
        error => {
          this.error = error.error.message,
          this.loadingService.hideLoading();
        }
      );
  }

  redirectToRoute(role: string)
  {
    if(role == 'super_admin') {
      this.router.navigate(['super-admin']);
    } else if(role == 'election_authority') {
      this.router.navigate(['election-authority'])
    } else if(role == 'voter') {
      this.router.navigate(['voter']);
    } else {
      console.log('login component error');
    }
  }

}
