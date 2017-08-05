import { Injectable } from '@angular/core';

// Importing events
{{#each components}}
  import { {{name}}Component } from './out/{{fileName}}';
{{/each}}

@Injectable()
export class EventsService {
  eventComponents = [
    {{#each components}}
      {{name}}Component,
    {{/each}}
  ];
  constructor() { }

  getCount() {
    return {{ components.length }};
  }

  getComponentByIndex(index) {
    return this.eventComponents[index];
  }

}
