import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './app/home/home.component';
import { AboutComponent } from './app/about/about.component';
import { WorldComponent } from './world/world.component';
import { WorldIndexComponent } from './world/list/world.index.component';
import { WorldEditComponent } from './world/form/world.form.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  {
    path: 'world',
    component: WorldComponent,
    children: [
      {
        path: '',
        component: WorldIndexComponent,
        pathMatch: 'full'
      },
      {
        path: 'new',
        component: WorldEditComponent,
        data: { edit: false, entity: 'world' }
      },
      {
        path: 'edit/:name',
        component: WorldEditComponent,
        data: { edit: true, entity: 'world' }
      }
    ]

  },
];

export const routing = RouterModule.forRoot(routes);
