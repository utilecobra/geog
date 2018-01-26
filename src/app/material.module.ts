import { NgModule } from '@angular/core';
import {
  MatButtonModule,
  MatProgressBarModule,
} from '@angular/material';

@NgModule({
  imports: [
    MatButtonModule,
    MatProgressBarModule,
  ],
  exports: [
    MatButtonModule,
    MatProgressBarModule,
  ]
})
export class MaterialModule { }
