import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  options = [];
  constructor() {

  }

  ngOnInit() {
     this.options = [
       { value: 1, name: 'PlayStation 4'},
       { value: 2, name: 'Xbox One'},
       { value: 3, name: 'Nintendo Switch'}];
        // console.log('object', this.options.name);

  }

}
