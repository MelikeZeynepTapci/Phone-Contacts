import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit {
  ContactA: any;
  ContactB: any;
  ContactC: any;


  constructor() { }

  ngOnInit(): void {
  }

}
