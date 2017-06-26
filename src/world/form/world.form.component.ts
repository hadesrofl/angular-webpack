import { Component, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { EntityManagerService } from '../shared/entity-manager';
import { MDEditorComponent } from '../shared/mde';

@Component({
  selector: 'my-world-edit',
  templateUrl: './world.form.html',
})
export class WorldEditComponent {
  edit: boolean;
  entity: string;
  name: string;
  @ViewChild('descEditor') descEditor: MDEditorComponent;
  @ViewChild('secretEditor') secretEditor: MDEditorComponent;
  constructor(route: ActivatedRoute) {
    this.name = route.snapshot.params['name'];
    this.edit = route.snapshot.data['edit'];
    this.entity = route.snapshot.data['entity'];
  }
  persist() {
    let method = '';
    if (this.edit) {
      method = 'put';
    } else {
      method = 'post';
    }
    console.log('Entity: ' + this.entity);
    console.log('Method: ' + method);
    const route = EntityManagerService.getEntityRoute(method, this.entity);
    console.log('Description: ' + this.descEditor.getValue());
    console.log('Secret: ' + this.secretEditor.getValue());
    console.log('Route: ' + route);
  }
}
