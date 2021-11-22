import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoCardComponent } from './todo-card/todo-card.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FilterByDonePipe } from 'src/app/shared/pipes/filter-by-done.pipe';
import { FilterByDefaultPipe } from 'src/app/shared/pipes/filter-by-default.pipe';

@NgModule({
  declarations: [TodoCardComponent, FilterByDonePipe, FilterByDefaultPipe],
  imports: [ReactiveFormsModule, CommonModule, FormsModule],
  exports: [TodoCardComponent],
})
export class ComponentsModule {}
