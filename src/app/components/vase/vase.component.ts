import { Component, OnInit } from '@angular/core';
import * as Data from './../../../server/data.json';

@Component({
  selector: 'app-vase',
  templateUrl: './vase.component.html',
  styleUrls: ['./vase.component.css']
})
export class VaseComponent implements OnInit {

  vaseData : any = Data;
  constructor() { }

  ngOnInit(): void {
  }

}
