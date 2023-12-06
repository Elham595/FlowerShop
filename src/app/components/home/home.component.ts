import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { DataService } from 'src/app/data.service';
import { filter } from 'rxjs/operators';
import * as Data from './../../../server/data.json';
// import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements AfterViewInit {

  @ViewChild('aboutSection', {read: ElementRef}) aboutSection!: ElementRef;
  @ViewChild('contactSection', {read: ElementRef}) contactSection!: ElementRef;
  @ViewChild('categoriesSection', {read: ElementRef}) categoriesSection!: ElementRef;
  @ViewChild('typesSection', {read: ElementRef}) typesSection!: ElementRef;

  constructor(private route: ActivatedRoute, private router: Router) {
    // Subscribe to route fragment changes
    // this.router.events.subscribe((event) => {
    //   if (event instanceof NavigationEnd) {
    //     this.scrollToSection(this.route.snapshot.fragment);
    //   }
    // });
  }
  ngAfterViewInit() {
    this.route.fragment.pipe(
      filter(fragment => !!fragment)
    ).subscribe(fragment => {
      this.scrollToSection(fragment || '{}');
    });
  }

  scrollToSection(fragment: string) {
    if (fragment === 'about' && this.aboutSection) {
      this.aboutSection.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else if (fragment === 'contact' && this.contactSection) {
      this.contactSection.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else if (fragment === 'categories' && this.categoriesSection) {
      this.categoriesSection.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else if (fragment === 'types' && this.typesSection) {
      this.typesSection.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
  ///////////////////////////////////
  flowerData:any = Data;

  // array:any = ['1','2','3','4','5'];
  // @ViewChild(MatPaginator, {static : true}) paginator:MatPaginator;
  showType1 : boolean = true;
  showType2 : boolean = false;
  showType3 : boolean = false;
  check : boolean = false;
  checkVase : boolean = false;
  checkBoquet : boolean = false;
  checkGift : boolean = false;
  id : number = 0;
  // ngAfterViewInit(): void {
  //   throw new Error('Method not implemented.');
  // }
  /**********Diplaying Types**********/
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
  /********Check For Product*********/
  checked(id: number){
    this.check = !this.check;
    this.id = id;
  }
  /********Check For *********/
  checkedVase(){
    this.checkVase = !this.checkVase;
  }
  checkedBoquet(){
    this.checkBoquet = !this.checkBoquet;
  }
  checkedGift(){
    this.checkGift = !this.checkGift;
  }
  idFromParent:any;
  ngOnInit(): void {
  }


}
