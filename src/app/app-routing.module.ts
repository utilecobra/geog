import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { CallbackComponent } from './pages/callback/callback.component';
import { MapTestComponent } from './pages/map-test/map-test.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'callback',
    component: CallbackComponent
  },
  {
    path: 'misc/map-test',
    component: MapTestComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
