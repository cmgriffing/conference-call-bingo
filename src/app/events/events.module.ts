import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventsService } from './events.service'

// Importing events
  import { Event0Component } from './out/event0.component';
  import { Event1Component } from './out/event1.component';
  import { Event2Component } from './out/event2.component';
  import { Event3Component } from './out/event3.component';
  import { Event4Component } from './out/event4.component';
  import { Event5Component } from './out/event5.component';
  import { Event6Component } from './out/event6.component';
  import { Event7Component } from './out/event7.component';
  import { Event8Component } from './out/event8.component';
  import { Event9Component } from './out/event9.component';
  import { Event10Component } from './out/event10.component';
  import { Event11Component } from './out/event11.component';
  import { Event12Component } from './out/event12.component';
  import { Event13Component } from './out/event13.component';
  import { Event14Component } from './out/event14.component';
  import { Event15Component } from './out/event15.component';
  import { Event16Component } from './out/event16.component';
  import { Event17Component } from './out/event17.component';
  import { Event18Component } from './out/event18.component';
  import { Event19Component } from './out/event19.component';
  import { Event20Component } from './out/event20.component';
  import { Event21Component } from './out/event21.component';
  import { Event22Component } from './out/event22.component';
  import { Event23Component } from './out/event23.component';
  import { Event24Component } from './out/event24.component';
  import { Event25Component } from './out/event25.component';
  import { Event26Component } from './out/event26.component';

// Creating declarations array
const eventComponents = [
    Event0Component,
    Event1Component,
    Event2Component,
    Event3Component,
    Event4Component,
    Event5Component,
    Event6Component,
    Event7Component,
    Event8Component,
    Event9Component,
    Event10Component,
    Event11Component,
    Event12Component,
    Event13Component,
    Event14Component,
    Event15Component,
    Event16Component,
    Event17Component,
    Event18Component,
    Event19Component,
    Event20Component,
    Event21Component,
    Event22Component,
    Event23Component,
    Event24Component,
    Event25Component,
    Event26Component,
];

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: eventComponents,
  providers: [
    EventsService
  ]
})
export class EventsModule {
  static getComponents() {
    return eventComponents;
  }
}
