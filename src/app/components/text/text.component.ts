import { Component, OnInit, Input } from '@angular/core';
import { text } from 'src/app/models/text';

@Component({
  selector: 'app-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.css']
})
export class TextComponent implements OnInit {
  @Input() text: text;
  @Input() language: string;
  constructor() { }

  ngOnInit(): void {
  }

}
