import { NgModule } from '@angular/core';
import {
  MatButtonModule,
  MatProgressBarModule,
  MatSidenavModule,
  MatListModule,
  MatToolbarModule,
  MatIconModule,
  MatProgressSpinnerModule,
} from '@angular/material';

@NgModule({
  imports: [
    MatButtonModule,
    MatProgressBarModule,
    MatSidenavModule,
    MatListModule,
    MatToolbarModule,
    MatIconModule,
    MatProgressSpinnerModule,
  ],
  exports: [
    MatButtonModule,
    MatProgressBarModule,
    MatSidenavModule,
    MatListModule,
    MatToolbarModule,
    MatIconModule,
    MatProgressSpinnerModule,
  ]
})
export class MaterialModule { }
