import { Component, OnInit, HostListener} from '@angular/core';

@Component({
  selector: 'app-header-top',
  templateUrl: './header-top.component.html',
  styleUrls: ['./header-top.component.css']
})
export class HeaderTopComponent implements OnInit {

  public getinvolved = ['志愿机会','Get Involved']
  public career = ['工作机会','Career']
  public immigration = ['移民咨询','Immigration']

  constructor() { }

  ngOnInit(): void {
  }
}
