import { Component,HostBinding, OnInit } from '@angular/core';
import { LoadingService } from "../services/loading.service";
import { Subscription } from "rxjs";
import { 
  trigger,
  state,
  style,
  animate,
  transition
 } from "@angular/animations";

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss'],
  animations: [
    trigger('popOverState', [
      state('show', style({
        opacity: 1
      })),
      state('hide', style({
        opacity: 0,
      })),
      transition('show => hide', animate('2s ease')),
      transition('hide => show', animate('1s ease'))
    ])
  ]
})
export class LoadingComponent implements OnInit {
  @HostBinding('class') class = 'd-flex flex-center flex-root';
  @HostBinding('class') hide = 'hide';
  loadingEventSubscription: Subscription;
  show = false;

  constructor(private loadingService: LoadingService) 
  { 
    this.loadingEventSubscription = this.loadingService
    .getLoadingEvent()
    .subscribe(state => {
      this.show = state;
      this.setHostVisibility(state);
    });
  }

  ngOnInit() {
  }

  get stateName() 
  {
    return this.show ? 'show' : 'hide';
  }

  setHostVisibility(state)
  {
    if(state) {
      this.hide = ''
    } else {
      this.hide = 'hide'
    }
  }
}
