import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventsService } from './events.service'

// Importing events
{{#each components}}
  import { {{name}}Component } from './out/{{fileName}}';
{{/each}}

// Creating declarations array
const eventComponents = [
  {{#each components}}
    {{name}}Component,
  {{/each}}
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
