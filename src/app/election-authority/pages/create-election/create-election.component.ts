import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ElectionService } from '@app/election-authority/services/election.service';
import { LoadingService } from '@app/services/loading.service';
import { BreadcrumbItem } from '@app/_models/breadcrumb-item';
import { CreateElectionDto } from '@app/_models/create-election.dto';
import { SwalComponent } from '@sweetalert2/ngx-sweetalert2';

@Component({
  selector: 'app-create-election',
  templateUrl: './create-election.component.html',
  styleUrls: ['./create-election.component.scss']
})
export class CreateElectionComponent implements OnInit {
  breadcrumbItems: BreadcrumbItem[] = [
    {
      name: 'Dashboard',
      route: '/election-authority'
    },
    {
      name: 'Semua Pemilihan',
      route: '/election-authority/election'
    },
    {
      name: 'Buat',
      route: '/election-authority/election/create'
    }
  ];
  createElectionForm: FormGroup;
  submitted = false;
  error = '';

  @ViewChild('createdElection', {static: false})
  public readonly createdElection: SwalComponent;

  @ViewChild('errorSwal', {static: false})
  public readonly errorSwal: SwalComponent;

  constructor(
    private electionService: ElectionService,
    private loadingService: LoadingService,
    private router: Router
  ) { }

  ngOnInit() {
    this.initForm();
  }

  initForm()
  {
    this.createElectionForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
      start: new FormControl('', [Validators.required]),
      end: new FormControl('', [Validators.required])
    });
  }

  get formControl()
  {
    return this.createElectionForm.controls;
  }

  onSubmit()
  {
    this.submitted = true;
    let createElectionDto: CreateElectionDto;

    if (this.createElectionForm.invalid) {
      return;
    }

    createElectionDto = {
      name: this.formControl.name.value,
      description: this.formControl.description.value,
      start: this.formControl.start.value,
      end: this.formControl.end.value
    }
    this.loadingService.showLoading();
    this.electionService.createElection(createElectionDto)
      .subscribe(
        result => {
          this.loadingService.hideLoading();
          this.createdElection.fire();
        },
        err => {
          this.error = err.error.message;
          this.loadingService.hideLoading();
          this.errorSwal.fire();
        }
      );
  }

  redirectBack()
  {
    this.router.navigate(['election-authority/election']);
  }
}
