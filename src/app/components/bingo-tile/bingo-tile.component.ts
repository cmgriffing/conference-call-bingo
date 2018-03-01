import { Component, OnInit, EventEmitter, Input, Output, ComponentFactoryResolver, AfterViewInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material';

import { EventModalComponent } from './../event-modal/event-modal.component';
import { BingoTileContentDirective } from './bingo-tile-content.directive';
import { ElementRef } from '@angular/core/src/linker/element_ref';

@Component({
  selector: 'app-bingo-tile',
  templateUrl: './bingo-tile.component.html',
  styleUrls: ['./bingo-tile.component.css']
})
export class BingoTileComponent implements OnInit, AfterViewInit {

  @Input()
  event;

  @Input()
  marked = false;

  @Input()
  eventIndex;

  @Output()
  markChanged = new EventEmitter();

  @ViewChild(BingoTileContentDirective)
  content: BingoTileContentDirective;


  $dialogClosed;

  constructor(private componentFactoryResolver: ComponentFactoryResolver, private dialog: MatDialog) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.event);
    const viewContainerRef = this.content.viewContainerRef;
    viewContainerRef.clear();
    viewContainerRef.createComponent(componentFactory);
  }

  buttonClick() {
    this.$dialogClosed = this.dialog.open(EventModalComponent, {
      width: '400px',
      data: {
        content: this.content.viewContainerRef.element.nativeElement.nextSibling.innerText,
        marked: this.marked
      }
    }).afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      if (result === true || result === false) {
        this.markChanged.emit({
          event: this.event,
          result
        });
      }
    });
  }

  removeHtmlComments(html) {
    return html.replace(/<!--[\s\S]*?-->/g, '');
  }

}
