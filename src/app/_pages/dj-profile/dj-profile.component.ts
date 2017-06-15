import { Component, Input, OnInit } from '@angular/core';
import {NgbModal, NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'dj-profile',
  templateUrl: './dj-profile.component.html',
  styleUrls: ['./dj-profile.component.scss']
})
export class DjProfileComponent implements OnInit {
  
  constructor(private activeModal: NgbActiveModal) { }

  ngOnInit() {
  }

}
