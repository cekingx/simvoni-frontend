import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'sv-participation-status-label',
  templateUrl: './participation-status-label.component.html',
  styleUrls: ['./participation-status-label.component.scss']
})
export class ParticipationStatusLabelComponent implements OnInit {
  @Input() status: string;

  constructor() { }

  ngOnInit() {
  }

  get statusState() {
    switch (this.status) {
      case 'waiting_approval':
        return 'abu';
      case 'accepted':
        return 'primary';
      case 'voted':
        return 'success';
      case 'rejected':
        return 'danger';

      default:
        return 'abu'
    }
  }

  get statusText() {
    switch (this.status) {
      case 'waiting_approval':
        return 'Waiting Approval';
      case 'accepted':
        return 'Accepted';
      case 'voted':
        return 'Voted'
      case 'rejected':
        return 'Rejected';

      default:
        return 'status'
    }
  }

}
