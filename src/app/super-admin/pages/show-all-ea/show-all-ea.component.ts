import { Component, OnInit } from '@angular/core';
import { ElectionAuthorityService } from '@app/super-admin/services/election-authority.service';
import { ElectionAuthority } from '@app/_models/ea';

@Component({
  selector: 'sv-super-admin-show-all-ea',
  templateUrl: './show-all-ea.component.html',
  styleUrls: ['./show-all-ea.component.scss']
})
export class ShowAllEaComponent implements OnInit {
  electionAuthorities: ElectionAuthority[] = [];

  constructor(
    private electionAuthorityService: ElectionAuthorityService
  ) { }

  ngOnInit() {
    this.electionAuthorityService
      .getAllElectionAuthority()
      .subscribe((data: ElectionAuthority[]) => {
        this.electionAuthorities = data;
      });
  }
}
