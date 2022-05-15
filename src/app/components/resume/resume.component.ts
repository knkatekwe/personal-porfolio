import { Component, OnInit } from '@angular/core';
import services from "../../core/data/services.json"

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit {

  services = services;

  constructor() { }

  ngOnInit() {
  }

}
