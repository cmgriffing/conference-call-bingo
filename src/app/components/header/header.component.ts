import { Component, OnInit } from '@angular/core';
import { BingoService } from '../../services/bingo.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  count = 0;

  constructor(private bingoService: BingoService) { }

  ngOnInit() {
  }

  newBoard() {
    console.log('new board');
    this.bingoService.createNewBoard();
  }

}
