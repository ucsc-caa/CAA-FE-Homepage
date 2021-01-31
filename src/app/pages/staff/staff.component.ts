import { Component, OnInit } from '@angular/core';
import { text } from '../../models/text';


@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.css']
})
export class StaffComponent implements OnInit {
  langs:{};

  constructor() { }


  ngOnInit(): void {
    this.langs = {
      a:{CN:'CAA网页项目团队', EN:'CAA Webpage Team'},
      b:{CN:'主管', EN:'Manager'}, 
      c:{CN:'前端主管', EN:'Front-end Manager'},
      d:{CN:'后端主管', EN:'Back-end Manager'},
      e:{CN:'产品/UI', EN:'Product/UI'},
      f:{CN:'前端', EN:'Front-end'},
      g:{CN:'后端', EN:'Back-end'}
    }
  }

}
