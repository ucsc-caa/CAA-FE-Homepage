import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  public picUrl = 'https://media-exp1.licdn.com/dms/image/C510BAQEIrV2s0A7o6w/company-logo_200_200/0?e=2159024400&v=beta&t=vMh56jL2BOYKMFZYHXigSCkQ6VfT8bVK3OcnFTiwwPU';
  constructor() { }

  ngOnInit(): void {
  }

}
