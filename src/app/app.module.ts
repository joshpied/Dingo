import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { DingoGridComponent } from './dingo-grid/dingo-grid.component';
import {DingoSelectionComponent} from './dingo-selection/dingo-selection.component';
import {DingoOptionsService} from './dingo-options.service';

@NgModule({
  declarations: [
    AppComponent,
    DingoGridComponent,
    DingoSelectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    DragDropModule
  ],
  providers: [
    DingoOptionsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
