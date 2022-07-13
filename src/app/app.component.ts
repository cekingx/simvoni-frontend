import { Component, OnInit } from '@angular/core';
import { LoadingService } from "./services/loading.service";
import { Subscription } from "rxjs";
import {
  trigger,
  state,
  style,
  animate,
  transition
 } from "@angular/animations";

declare let KTApp: any;
declare let KTAppSettings: any;
declare let KTLayoutAside: any;
declare let $: any;

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
export class AppComponent implements OnInit {
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

  ngOnInit(): void {
    $(document).ready(function() {
        KTLayoutAside.init('kt_aside');
    });
  }

  get stateName()
  {
    return this.showLoading ? 'show' : 'hide';
  }

}
