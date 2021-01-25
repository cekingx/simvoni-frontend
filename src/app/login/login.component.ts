import { Component, HostBinding, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { LoadingService } from "../services/loading.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  @HostBinding('class') class = 'd-flex flex-column flex-root';
  formGroup: FormGroup;

  constructor(
    private authService: AuthService,
    private loadingService: LoadingService,
    private route: Router
  ) 
  { }

  ngOnInit() {
    this.initForm();
  }

  initForm()
  {
    this.formGroup = new FormGroup({
      username: new FormControl('', [
        Validators.required
      ]),
      password: new FormControl('', [
        Validators.required
      ])
    })
  }

  login()
  {
    this.loadingService.showLoading();
    if(this.formGroup.valid) {
      this.authService.login(this.formGroup.value).subscribe(result => {
        this.loadingService.hideLoading();
        console.log(result);
        this.route.navigate(['super-admin']);
      })
    }
  }

}
