import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { Candidate } from '@app/_models/candidate';

@Component({
  selector: 'sv-ea-candidate-list',
  templateUrl: './candidate-list.component.html',
  styleUrls: ['./candidate-list.component.scss']
})
export class CandidateListComponent implements OnInit {
  @Input() candidates: Candidate[];
  constructor() { }

  ngOnInit() {
  }

}
