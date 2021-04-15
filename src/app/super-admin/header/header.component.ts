import { Component, HostBinding, OnInit } from '@angular/core';
import { AuthService } from '@app/services/auth.service';

@Component({
  selector: 'sv-super-admin-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @HostBinding('class') class = 'header header-fixed ';
  name: string;

  constructor(private authService: AuthService) {
    this.name = this.authService.currentUserValue.name;
  }

  ngOnInit() {
  }

}
