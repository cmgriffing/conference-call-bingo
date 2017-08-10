import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class BingoService {

  newBoardSubject = new Subject();

  constructor() { }

  createNewBoard() {
    this.newBoardSubject.next();
  }

  listenForNewBoard() {
    return this.newBoardSubject.asObservable();
  }

}
