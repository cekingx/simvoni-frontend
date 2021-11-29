import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoadingService } from '@app/services/loading.service';
import { ElectionAuthorityService } from '@app/super-admin/services/election-authority.service';
import { CreateEaDto } from '@app/_models/create-ea.dto';
import { ElectionAuthority } from '@app/_models/ea';
import { SwalComponent } from '@sweetalert2/ngx-sweetalert2';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'sv-super-admin-create-ea',
  templateUrl: './create-ea.component.html',
  styleUrls: ['./create-ea.component.scss']
})
export class CreateEaComponent implements OnInit {
  createEaForm: FormGroup;
  submitted = false;
  error = '';

  @ViewChild('createdEa', {static: false})
  public readonly createdEa: SwalComponent;

  @ViewChild('errorSwal', {static: false})
  public readonly errorSwal: SwalComponent;

  constructor(
    private electionAuthorityService: ElectionAuthorityService,
    private loadingService: LoadingService,
    private router: Router
  ) { }

  ngOnInit() {
    this.initForm();
  }

  initForm()
  {
    this.createEaForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    });
  }

  get formControl()
  {
    return this.createEaForm.controls;
  }

  onSubmit()
  {
    this.submitted = true;
    let createEaDto: CreateEaDto;

    if (this.createEaForm.invalid) {
      return;
    }

    createEaDto = {
      name: this.formControl.name.value,
      username: this.formControl.username.value,
      password: this.formControl.password.value
    }
    this.loadingService.showLoading();
    this.electionAuthorityService.createElectionAuthority(createEaDto)
      .subscribe(
        result => {
          this.loadingService.hideLoading();
          this.createdEa.fire();
        },
        err => {
          this.error = err.error.message;
          this.loadingService.hideLoading();
          this.errorSwal.fire();
        }
      )
  }

  redirectBack()
  {
    this.router.navigate(['super-admin/election-authority']);
  }
}
