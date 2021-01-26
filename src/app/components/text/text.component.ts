import { Component, OnInit, Input } from '@angular/core';
import { text } from 'src/app/models/text';
import { PageInfoService } from 'src/app/services/page-info.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.css']
})
export class TextComponent implements OnInit {
  @Input() text: text;
  lang: string = 'CN';
  subscription: Subscription;
  constructor(private pageInfoService: PageInfoService) { 
    this.subscription = this.pageInfoService.getLanguage().subscribe(language => {
      this.lang = language;
    });
  }

  ngOnInit(): void {

  }

}
