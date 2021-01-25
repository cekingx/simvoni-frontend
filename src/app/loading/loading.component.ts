import { Component,HostBinding, OnInit } from '@angular/core';
import { LoadingService } from "../services/loading.service";
import { Subscription } from "rxjs";

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss']
})
export class LoadingComponent implements OnInit {
  @HostBinding('class') class = 'd-flex flex-center flex-root';
  @HostBinding('class') hide = 'hide';
  loadingEventSubscription: Subscription;

  constructor(private loadingService: LoadingService) 
  { 
    this.loadingEventSubscription = this.loadingService
    .getLoadingEvent()
    .subscribe(state => {
      this.setIsHidden(state);
    });
  }

  ngOnInit() {
  }

  setIsHidden(state: boolean)
  {
    if(state) {
      this.hide = 'hide'
    } else {
      this.hide = ''
    }
  }

}
