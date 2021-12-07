import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { TaskLogicService } from './shared/services/tasks-logic.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent {
  search = new FormControl('');

  constructor(public service: TaskLogicService) {}

  openModal() {
    this.service.isCreated = !this.service.isCreated;
  }
}
