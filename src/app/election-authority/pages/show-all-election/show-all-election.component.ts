import { formatDate } from '@angular/common';
import { Component, Inject, LOCALE_ID, OnInit } from '@angular/core';
import { ElectionService } from '@app/election-authority/services/election.service';
import { BreadcrumbItem } from '@app/_models/breadcrumb-item';
import { Election } from '@app/_models/election';

@Component({
  selector: 'app-show-all-election',
  templateUrl: './show-all-election.component.html',
  styleUrls: ['./show-all-election.component.scss']
})
export class ShowAllElectionComponent implements OnInit {
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
  elections: Election[];

  constructor(
    private electionService: ElectionService,
    @Inject(LOCALE_ID) private locale: string
  ) { }

  ngOnInit() {
    this.electionService
      .getAllElection()
      .subscribe((data: Election[]) => {
        this.elections = data;
      });
  }

  formattedDate(dateString: string)
  {
    const date = new Date(dateString);
    return formatDate(date, 'dd MMM yyy', this.locale);
  }
}
