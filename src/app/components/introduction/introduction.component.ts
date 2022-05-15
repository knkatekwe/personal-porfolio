import { Component, OnInit } from '@angular/core';
import introduction from "../../core/data/introduction.json"

@Component({
  selector: 'app-introduction',
  templateUrl: './introduction.component.html',
  styleUrls: ['./introduction.component.css']
})
export class IntroductionComponent implements OnInit {

  introduction = introduction;

  constructor() { }

  ngOnInit() {
  }

}
