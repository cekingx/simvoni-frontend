import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoadingService } from '@app/services/loading.service';
import { ElectionAuthorityService } from '@app/super-admin/services/election-authority.service';
import { CreateEaDto } from '@app/_models/create-ea.dto';
import { ElectionAuthority } from '@app/_models/ea';

@Component({
  selector: 'sv-super-admin-create-ea',
  templateUrl: './create-ea.component.html',
  styleUrls: ['./create-ea.component.scss']
})
export class CreateEaComponent implements OnInit {
  createEaForm: FormGroup;
  submitted = false;
  error = '';

  constructor(
    private electionAuthorityService: ElectionAuthorityService,
    private loadingService: LoadingService
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
          console.log('EA Created');
          this.loadingService.hideLoading();
        },
        err => {
          this.error = err.error.message;
          this.loadingService.hideLoading();
        }
      )
  }
}
