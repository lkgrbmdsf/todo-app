import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent {
  isCreated: boolean = false;

  createTodo(): void {
    this.isCreated = true;
  }

  refresh(test: boolean) {
    this.isCreated = test;
  }
}
