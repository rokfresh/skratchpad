import {Component, OnInit} from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {DjProfileComponent} from '../dj-profile/dj-profile.component';
import {DjProfile} from "../dj-profile/dj-profile";
import {Http, Headers, Response, RequestOptions} from '@angular/http';
import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Component({selector: 'chapters', templateUrl: './chapters.component.html', styleUrls: ['./chapters.component.scss']})

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
      address: "4819 St Elmo Ave, Bethesda, MD"
    }
  };

  private headers : Headers = new Headers({"Content-Type": "application/json"});
  private dj_json : string = "../../../assets/lib/dj_profiles.json";

  constructor(private modal : NgbModal, private http : Http) {}

  getProfileJSON() {
    return this
      .http
      .get(this.dj_json, this.headers)
      .map((res) => res.json())
      .catch((err) => Observable.throw(console.log(err.json() || "Error")))
  }

  open(dj : string) {
    const modalRef = this
      .modal
      .open(DjProfileComponent)
      .componentInstance;
    this
      .getProfileJSON()
      .subscribe((res) => {

        function getDJ(obj, val) : void {
          for(var i in obj) {
            if (obj[i].hasOwnProperty(dj)) {
              let _dj = obj[i][dj];
              modalRef.name = _dj.name;
              modalRef.crew = _dj.crew;
              modalRef.since = _dj.since;
              modalRef.started = _dj.started;
              modalRef.photo = _dj.photo;
              modalRef.bio = _dj.bio;
              modalRef.social = _dj.social;
            }
          }
          console.log(modalRef.social.email);
        }
        getDJ(res, dj);
      })
  }
  ngOnInit() {}
}
