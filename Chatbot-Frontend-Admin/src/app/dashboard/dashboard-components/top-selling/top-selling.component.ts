import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-selling',
  templateUrl: './top-selling.component.html'
})
export class TopSellingComponent implements OnInit {
  @Input() topSelling: any;

  constructor() { }

  ngOnInit(): void { }
}
