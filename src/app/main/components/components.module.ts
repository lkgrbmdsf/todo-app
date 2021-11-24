import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoCardComponent } from './todo-card/todo-card.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FilterByDonePipe } from 'src/app/shared/pipes/filter-by-done.pipe';
import { FilterByDefaultPipe } from 'src/app/shared/pipes/filter-by-default.pipe';
import { ModalWindowComponent } from './modal-window/modal-window.component';
import { SortByDonePipe } from 'src/app/shared/pipes/sort-by-done.pipe';

@NgModule({
  declarations: [
    TodoCardComponent,
    FilterByDonePipe,
    FilterByDefaultPipe,
    ModalWindowComponent,
    SortByDonePipe,
  ],
  imports: [ReactiveFormsModule, CommonModule, FormsModule],
  exports: [TodoCardComponent, ModalWindowComponent],
})
export class ComponentsModule {}
