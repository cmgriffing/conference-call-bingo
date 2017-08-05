import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'event',
  template: `
    <ng-container i18n>{{value}}</ng-container>
  `,
  styles: ['']
})
export class {{componentName}}Component implements OnInit {

  static content = `{{value}}`;
  static index = {{index}};

  constructor() { }

  ngOnInit() {
  }

}
