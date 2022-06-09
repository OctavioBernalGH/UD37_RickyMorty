import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CharactercardComponent} from './charactercard/charactercard.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { DetailsComponent } from './details/details.component';

const routes: Routes = [
  {
    path: 'character',
    component: CharactercardComponent,
  },
  {
    path: 'about',
    component: AboutusComponent
  },
  {
    path: 'details',
    component: DetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
