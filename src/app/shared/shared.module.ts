import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TowerInputComponent } from './components/tower-input/tower-input.component';
import { TowerButtonComponent } from './components/tower-button/tower-button.component';

@NgModule({
  declarations: [TowerInputComponent, TowerButtonComponent],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
