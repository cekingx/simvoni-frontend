import { Component, OnInit } from '@angular/core';
import { LoadingService } from "../services/loading.service";

@Component({
  selector: 'app-toggle-loading',
  templateUrl: './toggle-loading.component.html',
  styleUrls: ['./toggle-loading.component.scss']
})
export class ToggleLoadingComponent implements OnInit {

  constructor(private loadingService: LoadingService) 
  { }

  ngOnInit() {
  }

  showLoading()
  {
    this.loadingService.showLoading();
    console.log('Oke');
  }
}
