import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import {DingoOptionsService} from '../dingo-options.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-dingo-selection',
  templateUrl: './dingo-selection.component.html',
  styleUrls: ['./dingo-selection.component.css']
})
export class DingoSelectionComponent implements OnInit {

  options = [];
  userChoices = [];

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
  }
  constructor(private _dataService: DingoOptionsService, private router: Router) {
    this.options = _dataService.getDingoOptions();
    // console.log(this.options);
  }

  ngOnInit() {
  }

  randomizeChoices() {
    const randomValues = this.randomRange(9);
    console.log(randomValues);
    randomValues.forEach((value, index) => {
        this.userChoices[index] = this.options[value];
    });
    this.router.navigate(['/', 'dingo-grid', this.userChoices]);
  }

  randomRange = length => {
    const results = [];
    const possibleValues = Array.from({ length }, () => Math.floor(Math.random() * (this.options.length - 1)));

    for (let i = 0; i < length; i += 1) {
      const possibleValuesRange = length - (length - possibleValues.length);
      const randomNumber = Math.floor(Math.random() * possibleValuesRange);
      const normalizedRandomNumber = randomNumber !== possibleValuesRange ? randomNumber : possibleValuesRange;

      const [nextNumber] = possibleValues.splice(normalizedRandomNumber, 1);

      results.push(nextNumber);
    }
    return results;
  }
}
