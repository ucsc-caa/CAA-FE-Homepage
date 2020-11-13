import { Component, OnInit } from '@angular/core';
import {PageInfoService} from './services/page-info.service'

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {

  constructor(
  	private pageInfoService: PageInfoService
  ) { }

  ngOnInit(): void {
  	this.event = this.pageInfoService.event();
  }

}
