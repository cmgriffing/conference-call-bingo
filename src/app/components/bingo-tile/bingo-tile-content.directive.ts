import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appBingoTileContent]'
})
export class BingoTileContentDirective {

  constructor(public viewContainerRef: ViewContainerRef) { }

}
