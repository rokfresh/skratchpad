import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.scss']
})
export class AppHeaderComponent implements OnInit {
  public isCollapsed: boolean = false;

  public collapsed(event: any): void {
    console.log(event);
  }
  public expanded(event: any): void {
    console.log(event);
  }
  constructor() { }

  ngOnInit() {
  }

}
