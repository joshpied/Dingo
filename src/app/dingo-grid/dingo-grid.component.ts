import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-dingo-grid',
  templateUrl: './dingo-grid.component.html',
  styleUrls: ['./dingo-grid.component.css']
})
export class DingoGridComponent implements OnInit {

  rawParams: object;
  userChoices: any[] = [];
  youGotADingo = false;

  constructor(private route: ActivatedRoute) {
      this.rawParams = this.route.snapshot.params;
      this.mapParamsToArray(this.rawParams);
  }

  mapParamsToArray(data) {
    const tempArray = Object.values(data);
    tempArray.forEach((choice, index) => {
      this.userChoices.push({name: choice, marked: false, value: index + 1});
    });
    console.log(this.userChoices);
  }

  markSelection(markedValue, index) {
      this.userChoices[index].marked = !this.userChoices[index].marked;
      this.m8YouGotADingo();
  }

  m8YouGotADingo() {
    // Horizontals
    this.checkHorizontals();
    // Verticals
    this.checkVerticals();
    // Diagonals
    this.checkDiagonals();
  }

  checkHorizontals() {
      if (this.userChoices[0].marked && this.userChoices[1].marked && this.userChoices[2].marked) {
        this.youGotADingo = true;
      }
      if (this.userChoices[3].marked && this.userChoices[4].marked && this.userChoices[5].marked) {
        this.youGotADingo = true;
      }
      if (this.userChoices[6].marked && this.userChoices[7].marked && this.userChoices[8].marked) {
        this.youGotADingo = true;
      }
  }

  checkVerticals() {
      if (this.userChoices[0].marked && this.userChoices[3].marked && this.userChoices[6].marked) {
        this.youGotADingo = true;
      }
      if (this.userChoices[1].marked && this.userChoices[4].marked && this.userChoices[7].marked) {
        this.youGotADingo = true;
      }
      if (this.userChoices[2].marked && this.userChoices[5].marked && this.userChoices[8].marked) {
        this.youGotADingo = true;
      }
  }

  checkDiagonals() {
      if (this.userChoices[0].marked && this.userChoices[4].marked && this.userChoices[8].marked) {
        this.youGotADingo = true;
      }
      if (this.userChoices[2].marked && this.userChoices[4].marked && this.userChoices[6].marked) {
        this.youGotADingo = true;
      }
  }

  ngOnInit() {
  }

}
