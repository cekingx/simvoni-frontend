import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ElectionService } from '@app/election-authority/services/election.service';
import { LoadingService } from '@app/services/loading.service';
import { BreadcrumbItem } from '@app/_models/breadcrumb-item';
import { CreateWeightDto } from '@app/_models/create-weight.dto';

@Component({
  selector: 'app-create-weight',
  templateUrl: './create-weight.component.html',
  styleUrls: ['./create-weight.component.scss']
})
export class CreateWeightComponent implements OnInit {
  breadcrumbItems: BreadcrumbItem[] = [
    {
      name: 'Dashboard',
      route: '/election-authority'
    }
  ]
  createWeightForm: FormGroup;
  submitted = false;
  error = '';

  constructor(
    private loadingService: LoadingService,
    private electionService: ElectionService,
    private router: Router
  ) { }

  ngOnInit() {
    this.initForm();
  }

  initForm()
  {
    this.createWeightForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      weight: new FormControl('', [Validators.required])
    });
  }

  get formControl()
  {
    return this.createWeightForm.controls;
  }

  onSubmit()
  {
    this.submitted = true;
    let createWeightDto: CreateWeightDto;

    if( this.createWeightForm.invalid) {
      return;
    }

    createWeightDto = {
      name: this.formControl.name.value,
      weight: this.formControl.weight.value
    }
    this.loadingService.showLoading();
    // this.electionService.createWeight(createWeightDto)
    //   .subscribe(
    //     result => {
    //       this.loadingService.hideLoading();
    //     },
    //     err => {
    //       this.error = err.error.message;
    //       this.loadingService.hideLoading();
    //     }
    //   );
  }

  redirectBack()
  {
    this.router.navigate(['election-authority/election']);
  }

}
