import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoCardComponent } from './todo-card/todo-card.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalWindowComponent } from './modal-window/modal-window.component';
import { SortByDonePipe } from 'src/app/shared/pipes/sort-by-done.pipe';
import {
  DescBordersDirective,
  TitleBordersDirective,
} from 'src/app/shared/directives/border-validating.directive';

@NgModule({
  declarations: [
    TodoCardComponent,
    ModalWindowComponent,
    SortByDonePipe,
    TitleBordersDirective,
    DescBordersDirective,
  ],
  imports: [ReactiveFormsModule, CommonModule, FormsModule],
  exports: [TodoCardComponent, ModalWindowComponent],
})
export class ComponentsModule {}
