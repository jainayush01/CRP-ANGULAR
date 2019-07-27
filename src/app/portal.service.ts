import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PortalService {
  private logged = new BehaviorSubject<boolean>(false);
  currentLogged = this.logged.asObservable();
  changeLogged(value: boolean) { this.logged.next(value); }


  constructor() { }
}
