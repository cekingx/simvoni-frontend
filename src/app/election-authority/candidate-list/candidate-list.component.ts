import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { Candidate } from '@app/_models/candidate';
import { Election } from '@app/_models/election';

@Component({
  selector: 'sv-ea-candidate-list',
  templateUrl: './candidate-list.component.html',
  styleUrls: ['./candidate-list.component.scss']
})
export class CandidateListComponent implements OnInit {
  @Input() election: Election;
  constructor() { }

  ngOnInit() {
  }

}
