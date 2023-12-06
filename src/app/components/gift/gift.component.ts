import { Component, OnInit } from '@angular/core';
import * as Data from './../../../server/data.json';

@Component({
  selector: 'app-gift',
  templateUrl: './gift.component.html',
  styleUrls: ['./gift.component.css']
})
export class GiftComponent implements OnInit {

  giftData : any = Data;
  constructor() { }


  ngOnInit(): void {
  }

}
