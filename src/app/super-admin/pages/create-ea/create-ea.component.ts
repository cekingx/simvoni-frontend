import { Component, OnInit } from '@angular/core';
import { ElectionAuthorityService } from '@app/super-admin/services/election-authority.service';
import { ElectionAuthority } from '@app/_models/ea';

@Component({
  selector: 'app-create-ea',
  templateUrl: './create-ea.component.html',
  styleUrls: ['./create-ea.component.scss']
})
export class CreateEaComponent implements OnInit {

  constructor(private electionAuthorityService: ElectionAuthorityService) { }

  ngOnInit() {
    this.electionAuthorityService.getAllElectionAuthority().subscribe((data: ElectionAuthority[]) => {
      console.log(data);
    });
  }

}
