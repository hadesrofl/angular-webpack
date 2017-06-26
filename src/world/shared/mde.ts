import { AfterViewInit, Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';

declare let require: any;
let SimpleMDE = require('simplemde/dist/simplemde.min.js');

@Component({
  selector: 'my-editor',
  template: `<textarea [(ngModel)]='model' #simplemde></textarea>
        <link rel='stylesheet' href='https://cdn.jsdelivr.net/simplemde/latest/simplemde.min.css'>
        <script src='https://cdn.jsdelivr.net/simplemde/latest/simplemde.min.js'></script>`,
})
export class MDEditorComponent implements AfterViewInit {
  @Input() model: any;
  @Output() change = new EventEmitter<string>();
  @ViewChild('simplemde') textarea: ElementRef;
  id: string;
  entity: string;
  mde: any;
  constructor(private elementRef: ElementRef) {
    this.id = this.elementRef.nativeElement.getAttribute('id');
    this.entity = this.elementRef.nativeElement.getAttribute('entity');
  }
  save() {
    // const route = EntityManagerService.getEntityRoute('post', this.entity);
    // const value = this.mde.codemirror.getValue();
  }
  getValue() {
    return this.mde.codemirror.getValue();
  }
  ngAfterViewInit() {
    const change = this.change;
    const mde = new SimpleMDE({
      element: this.textarea.nativeElement,
      forceSync: true,
      status: ['autosave', 'lines', 'words', 'cursor', {
        className: 'keystrokes',
        defaultValue: function(el) {
          this.keystrokes = 0;
          el.innerHTML = '0 Keystrokes';
        },
        onUpdate: function(el) {
          el.innerHTML = ++this.keystrokes + ' Keystrokes';
        }
      }],
      // Autosaves to local storage of users browser
      autosave: {
        enabled: true,
        uniqueId: this.id,
        delay: 10 * 1000,
      },
    });

    this.mde = mde;

    mde.codemirror.on('change', function() {
      const value = mde.codemirror.getValue();
      change.emit(value);
    });

    if (this.model) {
      mde.codemirror.setValue(this.model);
    }
  }
}
