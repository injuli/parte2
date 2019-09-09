import { Component, Input, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-cool-select',
  templateUrl: './cool-select.component.html',
  styleUrls: ['./cool-select.component.css']
})
export class CoolSelectComponent {

  @Input('data') data: any;
  @Input('options') options: any;
  constructor() {

  }


}
