import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ElectionService } from '@app/election-authority/services/election.service';
import { LoadingService } from '@app/services/loading.service';
import { BreadcrumbItem } from '@app/_models/breadcrumb-item';
import { CreateWeightDto } from '@app/_models/create-weight.dto';
import { Election } from '@app/_models/election';
import { SwalComponent } from '@sweetalert2/ngx-sweetalert2';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-create-weight',
  templateUrl: './create-weight.component.html',
  styleUrls: ['./create-weight.component.scss']
})
export class CreateWeightComponent implements OnInit, OnDestroy {
  subscription1$: Subscription;
  subscriptions: Subscription = new Subscription();
  election: Election;
  breadcrumbItems: BreadcrumbItem[] = [
    {
      name: 'Dashboard',
      route: '/election-authority'
    },
    {
      name: 'Semua Pemilihan',
      route: '/election-authority/election'
    }
  ]
  createWeightForm: FormGroup;
  submitted = false;
  error = '';

  @ViewChild('addedWeight', {static: false})
  public readonly addedWeight: SwalComponent;

  @ViewChild('errorSwal', {static: false})
  public readonly errorSwal: SwalComponent;

  constructor(
    private loadingService: LoadingService,
    private electionService: ElectionService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.initForm();
    this.subscription1$ = this.route.data.subscribe((data: any) => {
      this.election = data.election;
      this.breadcrumbItems.push(
        {
          name: this.election.name,
          route: '/election-authority/election/' + this.election.id
        },
        {
          name: 'Tambah Weight',
          route: '/election-authority/election/' + this.election.id + '/add-weight'
        }
      );
      this.loadingService.hideLoading();
    })
  }

  ngOnDestroy() {
    this.pushSubscription();

    this.subscriptions.unsubscribe();
  }

  pushSubscription() {
    this.subscriptions.add(this.subscription1$);
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
    console.log(this.formControl);

    if( this.createWeightForm.invalid) {
      return;
    }

    createWeightDto = {
      name: this.formControl.name.value,
      weight: this.formControl.weight.value
    }
    this.loadingService.showLoading();
    this.electionService.addWeight(createWeightDto, this.election.id)
      .subscribe(
        result => {
          this.loadingService.hideLoading();
          this.addedWeight.fire();
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
    this.router.navigate([`election-authority/election/${this.election.id}/weight`]);
  }

}
