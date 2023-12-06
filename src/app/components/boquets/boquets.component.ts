import { Component, OnInit } from '@angular/core';
import * as Data from './../../../server/data.json';

@Component({
  selector: 'app-boquets',
  templateUrl: './boquets.component.html',
  styleUrls: ['./boquets.component.css']
})
export class BoquetsComponent implements OnInit {

  boquetData : any = Data;
  constructor() { }

  ngOnInit(): void {
  }

}
