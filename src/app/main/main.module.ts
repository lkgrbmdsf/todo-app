import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from './components/components.module';
import { MainComponent } from './main.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [MainComponent],
  imports: [CommonModule, ComponentsModule, ReactiveFormsModule, SharedModule],
  exports: [MainComponent],
})
export class MainModule {}
