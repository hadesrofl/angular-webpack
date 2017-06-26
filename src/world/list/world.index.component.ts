import { Component, ElementRef } from '@angular/core';

@Component({
  selector: 'my-world-index',
  templateUrl: './world.index.html',
})
export class WorldIndexComponent {
  edit: boolean;
  entity: string;
  name: any;
  worlds: Object[];
  constructor(private elementRef: ElementRef) {
    this.edit = this.elementRef.nativeElement.getAttribute('edit');
    this.entity = this.elementRef.nativeElement.getAttribute('entity');

    this.worlds = [
      {
        name: 'Schwertküste',
        description: 'Dieser Text ist hoffentlich viel zu lang, um angezeigt zu werden.' +
        ' Immerhin soll er limitiert sein, damit das Layout vernünftig aussieht.'
      },
      {
        name: 'Golarion',
        description: 'Dieser Text ist hoffentlich viel zu lang, um angezeigt zu werden.' +
        ' Immerhin soll er limitiert sein, damit das Layout vernünftig aussieht.'
      },
      {
        name: 'Mittelerde',
        description: 'Dieser Text ist hoffentlich viel zu lang, um angezeigt zu werden.' +
        ' Immerhin soll er limitiert sein, damit das Layout vernünftig aussieht.'
      },
      {
        name: 'Hogwarts',
        description: 'Dieser Text ist hoffentlich viel zu lang, um angezeigt zu werden.' +
        ' Immerhin soll er limitiert sein, damit das Layout vernünftig aussieht.'
      },
    ]
  };
  get() {

  };
}
