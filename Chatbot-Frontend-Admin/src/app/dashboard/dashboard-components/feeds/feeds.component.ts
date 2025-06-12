import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-feeds',
  templateUrl: './feeds.component.html'
})
export class FeedsComponent implements OnInit {
  @Input() feeds: any[] = [];

  constructor() { }

  ngOnInit(): void { }
}
