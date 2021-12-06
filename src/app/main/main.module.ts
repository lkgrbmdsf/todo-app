import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from './components/components.module';
import { MainComponent } from './main.component';
import { FilterByNamePipe } from '../shared/pipes/filter-by-name';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [MainComponent, FilterByNamePipe],
  imports: [CommonModule, ComponentsModule, ReactiveFormsModule],
  exports: [MainComponent],
})
export class MainModule {}
