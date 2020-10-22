import { Component } from '@angular/core';
import { FieldType } from '@ngx-formly/core';

@Component({
  selector: 'formly-field-custom-input',
  template: `
    <div>
      <jigsaw-input [formControl]="formControl" [formlyAttributes]="field"> </jigsaw-input>
      <br />
      <jigsaw-button colorType="primary" (click)="onClick()">{{ to.label }}</jigsaw-button>
    </div>
  `,
})
export class FormlyFieldCustomInput extends FieldType {
  get type() {
    return this.to.type || 'text';
  }

  onClick() {
    console.log(this);
  }
}
