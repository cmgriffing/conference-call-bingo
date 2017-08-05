import { Component, OnInit } from '@angular/core';
import { EventsService } from '../../events/events.service';

@Component({
  selector: 'app-bingo-board',
  templateUrl: './bingo-board.component.html',
  styleUrls: ['./bingo-board.component.css']
})
export class BingoBoardComponent implements OnInit {

  events = [];
  eventIndexes = new Set([]);
  eventChecks = new Set([]);

  constructor(private eventsService: EventsService) { }

  ngOnInit() {
    this.refreshTiles();
  }

  refreshTiles() {
    const eventCount = this.eventsService.getCount();
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
