import { Component, OnInit, Input } from '@angular/core';
import * as Data from './../../../server/data.json';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  showType1 : boolean = true;
  showType2 : boolean = false;
  showType3 : boolean = false;
  @Input() typeId : number = 0;
  products:any = Data;
  constructor() { }

  displayType1(){
    this.showType1 = !this.showType1;
    this.showType2 = false;
    this.showType3 = false;
  }
  displayType2(){
    this.showType2 = !this.showType2;
    this.showType1 = false;
    this.showType3 = false;
  }
  displayType3(){
    this.showType3 = !this.showType3;
    this.showType1 = false;
    this.showType2 = false;
  }
  @Input() idFromParent : number = 0;
  ngOnInit(): void {
  }

}
