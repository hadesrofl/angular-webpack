import { NgModule, ApplicationRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';

import { removeNgStyles, createNewHosts } from '@angularclass/hmr';
import { MDEditorComponent } from './shared/mde';
import { WorldComponent } from './world.component';
import { WorldEditComponent } from './form/world.form.component';
import { EntityManagerService } from './shared/entity-manager';
import { WorldIndexComponent } from './list/world.index.component';

import { routing } from '../routing';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    routing,
  ],
  declarations: [
    MDEditorComponent,
    WorldComponent,
    WorldEditComponent,
    WorldIndexComponent,
  ],

  providers: [EntityManagerService],
  exports: [WorldIndexComponent, WorldEditComponent, WorldComponent]
})

export class WorldModule {
  constructor(public appRef: ApplicationRef) { }
  hmrOnInit(store) {
    console.log('HMR store', store);
  }
  hmrOnDestroy(store) {
    let cmpLocation = this.appRef.components.map(cmp => cmp.location.nativeElement);
    // recreate elements
    store.disposeOldHosts = createNewHosts(cmpLocation);
    // remove styles
    removeNgStyles();
  }
  hmrAfterDestroy(store) {
    // display new elements
    store.disposeOldHosts();
    delete store.disposeOldHosts;
  }
}
