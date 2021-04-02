import { Component, HostBinding, OnInit } from '@angular/core';

@Component({
  selector: 'sv-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  @HostBinding('class') class = 'footer bg-white py-4 d-flex flex-lg-column';

  constructor() { }

  ngOnInit() {
  }

}
