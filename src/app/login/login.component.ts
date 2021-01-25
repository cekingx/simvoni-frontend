import { Component, HostBinding, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  @HostBinding('class') class = 'd-flex flex-column flex-root';
  formGroup: FormGroup;

  constructor(private authService: AuthService) 
  { 

  }

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
    if(this.formGroup.valid) {
      this.authService.login(this.formGroup.value).subscribe(result => {
        console.log(result);
      })
    }
  }

}
