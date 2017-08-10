import { TileContentService } from './services/tile-content.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdButtonModule, MdDialogModule } from '@angular/material';

import { EventsModule } from './events/events.module';

import { AppComponent } from './app.component';
import { BingoBoardComponent } from './components/bingo-board/bingo-board.component';
import { BingoTileComponent } from './components/bingo-tile/bingo-tile.component';
import { MainComponent } from './pages/main/main.component';
import { HeaderComponent } from './components/header/header.component';
import { BingoTileContentDirective } from './components/bingo-tile/bingo-tile-content.directive';

import { BingoService } from './services/bingo.service';
import { EventsService } from './events/events.service';
import { EventModalComponent } from './components/event-modal/event-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    BingoBoardComponent,
    BingoTileComponent,
    MainComponent,
    HeaderComponent,
    BingoTileContentDirective,
    EventModalComponent
  ],
  entryComponents: [
    ...EventsModule.getComponents(),
    EventModalComponent
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    FormsModule,
    EventsModule,
    BrowserAnimationsModule,
    MdButtonModule,
    MdDialogModule
  ],
  providers: [
    TileContentService,
    EventsService,
    BingoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
