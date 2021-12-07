import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoCardComponent } from './todo-card/todo-card.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ModalDialogComponent } from './modal-dialog/modal-dialog.component';

@NgModule({
  declarations: [TodoCardComponent, ModalDialogComponent],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [TodoCardComponent, ModalDialogComponent],
})
export class ComponentsModule {}
