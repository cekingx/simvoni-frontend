import { Component, HostBinding, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '@app/services/auth.service';
import { LoadingService } from '@app/services/loading.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  @HostBinding('class') class = 'd-flex flex-column flex-root svg-background';
  registerForm: FormGroup;
  submitted = false;
  error = '';

  constructor(
    private authService: AuthService,
    private loadingService: LoadingService,
    private router: Router
  ) { }

  ngOnInit() {
    this.initForm();
  }

  initForm()
  {
    this.registerForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    });
  }

  get f()
  {
    return this.registerForm.controls;
  }

  onSubmit()
  {
    this.submitted = true;

    if (this.registerForm.invalid) {
      return;
    }

    this.loadingService.showLoading();
    this.authService.register(this.f.name.value, this.f.username.value, this.f.password.value)
      .pipe(first())
      .subscribe(
        result => {
          this.redirectLogin();
          this.loadingService.hideLoading();
        },
        error => {
          this.error = error;
          this.loadingService.hideLoading();
        }
      )
  }

  redirectLogin()
  {
    this.router.navigate(['login']);
  }

}
