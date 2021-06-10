import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'sv-election-status-label',
  templateUrl: './election-status-label.component.html',
  styleUrls: ['./election-status-label.component.scss']
})
export class ElectionStatusLabelComponent implements OnInit {
  @Input() status: string;

  constructor() { }

  ngOnInit() {
  }

  get statusState() {
    switch (this.status) {
      case 'draft':
        return 'secondary';
      case 'ready_to_deploy':
        return 'warning';
      case 'deployed':
        return 'primary';
      case 'started':
        return 'success';
      case 'ended':
        return 'primary';
      case 'rejected':
        return 'danger';

      default:
        return 'secondary'
    }
  }

  get statusText() {
    switch (this.status) {
      case 'draft':
        return 'Draft';
      case 'ready_to_deploy':
        return 'Ready to Deploy';
      case 'deployed':
        return 'Deployed';
      case 'started':
        return 'Started';
      case 'ended':
        return 'Ended';
      case 'rejected':
        return 'Rejected';

      default:
        return 'secondary'
    }
  }
}
