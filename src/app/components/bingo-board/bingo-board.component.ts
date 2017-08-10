import { Component, OnInit, OnDestroy } from '@angular/core';
import { EventsService } from '../../events/events.service';
import { BingoService } from '../../services/bingo.service';

@Component({
  selector: 'app-bingo-board',
  templateUrl: './bingo-board.component.html',
  styleUrls: ['./bingo-board.component.css']
})
export class BingoBoardComponent implements OnInit, OnDestroy {

  events = [];
  eventIndexes = new Set([]);
  eventChecks = new Set([]);

  newBoard$;

  constructor(private eventsService: EventsService, private bingoService: BingoService) { }

  ngOnInit() {
    this.refreshTiles();
    this.newBoard$ = this.bingoService.listenForNewBoard().subscribe(() => {
      console.log('new board within bingo board');
      this.refreshTiles();
    });
  }

  ngOnDestroy() {
    if(this.newBoard$) {
      this.newBoard$.unsubscribe();
    }
  }

  refreshTiles() {
    const eventCount = this.eventsService.getCount();
    this.eventIndexes.clear();
    this.eventChecks.clear();
    this.events = [];
    while (this.eventIndexes.size < 25) {
      const currentCount = this.eventIndexes.size;
      const randomIndex = Math.floor(Math.random() * eventCount);
      this.eventIndexes.add(randomIndex);
      if (this.eventIndexes.size > currentCount) {
        this.events.push(this.eventsService.getComponentByIndex(randomIndex));
      }
    }
  }

  tileChanged(changeEvent) {
    console.log('event', changeEvent);
    if (changeEvent.result) {
      this.eventChecks.add(changeEvent.event.index);
    } else {
      this.eventChecks.delete(changeEvent.event.index)
    }

    console.log('this.eventChecks', this.eventChecks);
  }

}
