import { Injectable } from '@angular/core';
import { Subject, Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class LoadingService {
  private subject = new Subject<boolean>();

  constructor() { }

  showLoading()
  {
    this.sendLoadingEvent(false);
  }

  hideLoading()
  {
    this.sendLoadingEvent(true);
  }

  sendLoadingEvent(state: boolean)
  {
    this.subject.next(state);
  }

  getLoadingEvent(): Observable<boolean>
  {
    return this.subject.asObservable();
  }
}
