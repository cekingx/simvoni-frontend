import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ElectionService } from '@app/election-authority/services/election.service';
import { LoadingService } from '@app/services/loading.service';
import { BreadcrumbItem } from '@app/_models/breadcrumb-item';
import { AddCandidateDto } from '@app/_models/candidate';
import { Election } from '@app/_models/election';
import { SwalComponent } from '@sweetalert2/ngx-sweetalert2';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-add-candidate',
  templateUrl: './add-candidate.component.html',
  styleUrls: ['./add-candidate.component.scss']
})
export class AddCandidateComponent implements OnInit, OnDestroy {
  subscription1$: Subscription;
  subscription2$: Subscription;
  subscription3$: Subscription;
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
  ];
  misi: Array<string> = []
  pengalaman: Array<string> = []
  addCandidateForm: FormGroup;
  isSubmitted = false;
  error = '';

  @ViewChild('addedCandidate', {static: false})
  public readonly addedCandidate: SwalComponent;

  @ViewChild('errorSwal', {static: false})
  public readonly errorSwal: SwalComponent;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private electionService: ElectionService,
    private loadingService: LoadingService,
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
          name: 'Tambah Kandidat',
          route: '/election-authority/election/' + this.election.id + '/add-candidate'
        }
      );
      this.loadingService.hideLoading();
    });
  }

  ngOnDestroy() {
    this.pushSubscription();

    this.subscriptions.unsubscribe();
  }

  initForm() {
    this.addCandidateForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      visi: new FormControl('', [Validators.required]),
      misi: new FormControl(),
      pengalaman: new FormControl()
    });
  }

  get formControl() {
    return this.addCandidateForm.controls;
  }

  addCandidate() {}

  redirectBack() {
    this.router.navigate(['election-authority/election/', this.election.id])
  }

  onSubmit() {
    this.isSubmitted = true;

    if(this.addCandidateForm.invalid) {
      return;
    }

    let addCandidateDto: AddCandidateDto = {
      name: this.formControl.name.value,
      visi: this.formControl.visi.value,
      misi: this.misi,
      pengalaman: this.pengalaman
    }
    this.loadingService.showLoading();
    this.electionService.addCandidate(addCandidateDto, this.election.id)
      .subscribe(
        result => {
          this.loadingService.hideLoading();
          this.addedCandidate.fire();
        },
        err => {
          this.error = err.error.message;
          this.loadingService.hideLoading();
          this.errorSwal.fire();
        }
      )
  }

  addMisi() {
    let misi = this.formControl.misi.value;
    this.formControl.misi.setValue('');
    this.misi.push(misi);
  }

  addPengalaman() {
    let pengalaman = this.formControl.pengalaman.value;
    this.formControl.pengalaman.setValue('');
    this.pengalaman.push(pengalaman);
  }

  removeMisi(index: number) {
    this.misi.splice(index, 1);
  }

  removePengalaman(index: number) {
    this.pengalaman.splice(index, 1);
  }

  pushSubscription() {
    this.subscriptions.add(this.subscription1$);
    this.subscriptions.add(this.subscription2$);
  }
}
