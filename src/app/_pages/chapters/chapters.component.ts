import {Component, OnInit} from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'chapters',
  templateUrl: './chapters.component.html',
  styleUrls: ['./chapters.component.scss']
})
export class ChaptersComponent implements OnInit {


  private chapter : any = {
    sf: {
      city: "San Francisco",
      venue: "Chai Bar by David Rio",
      address: "1019 Market St., SF, CA"
    },
    lv: {
      city: "Las Vegas",
      venue: "1 Stop DJ Shop",
      address: "222 E.Imperial Ave.,Las Vegas, NV"
    },
    dc: {
      city: "Washington D.C.",
      venue: "Beat Refinery",
      address: "13009 Worldgate Dr., Herndon, VA"
    }
  };

  constructor(private modal: NgbModal) {}
  
  ngOnInit() {

  }

}
