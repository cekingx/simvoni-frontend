import { Component } from '@angular/core';
import { LoadingService } from "./services/loading.service";
import { Subscription } from "rxjs";
import { 
  trigger,
  state,
  style,
  animate,
  transition
 } from "@angular/animations";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('popOverState', [
      state('show', style({
        opacity: 1,
      })),
      state('hide', style({
        opacity: 0,
        zIndex: -10
      })),
      transition('show => hide', animate('500ms ease')),
      transition('hide => show', animate('500ms ease'))
    ])
  ]
})
export class AppComponent {
  title = 'Index Simvoni';
  loadingEventSubscription: Subscription;
  showLoading = false;

  constructor(private loadingService: LoadingService)
  {
    this.loadingEventSubscription = this.loadingService
    .getLoadingEvent()
    .subscribe(state => {
      this.showLoading = state;
    });
  }

  get stateName() 
  {
    return this.showLoading ? 'show' : 'hide';
  }

}
