import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoCardComponent } from './todo-card/todo-card.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ModalMenuComponent } from './modal-menu/modal-menu.component';

@NgModule({
  declarations: [TodoCardComponent, ModalMenuComponent],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [TodoCardComponent, ModalMenuComponent],
})
export class ComponentsModule {}
