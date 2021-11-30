import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from './components/components.module';
import { MainComponent } from './main.component';
import { FilterByDonePipe } from '../shared/pipes/sort-by-done.pipe';

@NgModule({
  declarations: [MainComponent, FilterByDonePipe],
  imports: [CommonModule, ComponentsModule],
  exports: [MainComponent],
})
export class MainModule {}
