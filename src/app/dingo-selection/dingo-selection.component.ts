import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-dingo-selection',
  templateUrl: './dingo-selection.component.html',
  styleUrls: ['./dingo-selection.component.css']
})
export class DingoSelectionComponent implements OnInit {

  options = [
    'Condescension',
    'Mentions your parents',
    'Thinks you are straight out of highschool',
    'Introduces the concept of starting an assignment early',
    'Sabre',
    'Gore/Goretex',
    'Lines of Code',
    'Rhetorical Question (but expects an answer)',
    'Poorly Formatted Slides',
    'Makes up an equation',
    'Cohesion/Coupling',
    'Subroutine',
    'Schema',
    'Macro',
    'Insults women',
    'Cats',
    'Talks about an obsolete technology',
    'Disses phone plans',
    'Says we can\'t manage money/time',
    'Does anyone read the news',
    'Triple bottom line',
    'Mentions Surge',
    'Attendance',
    'Arrogance',
    'Excel',
    'Unrelated Anecdote/Uninteresting Fact',
    'Hockey',
    'Makes us watch a video of himself',
    'Checks if we logged into elearn',
    'Exposes confidential student information',
    'Racism/Stereotypes',
    'WHERE THE FUCK IS [Specific Student]',
    '"Are you in my class?"',
    'Attendance only content',
    'Mentions his Boss',
    'Insults his wife',
    'Talks shit about Capstone',
    'My International Friends',
    'Says the exact number of people who are supposed to be in class',
  ];

  userChoices = [
    // 'Get up',
    // 'Brush teeth',
    // 'Take a shower',
    // 'Check e-mail',
    // 'Walk dog'
  ];

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
  constructor() { }

  ngOnInit() {
  }

}
