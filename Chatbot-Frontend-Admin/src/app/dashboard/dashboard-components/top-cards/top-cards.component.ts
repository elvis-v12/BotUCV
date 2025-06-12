import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-top-cards',
  templateUrl: './top-cards.component.html'
})
export class TopCardsComponent {
  @Input() topCards: any[] = [];  // Inicialización

  constructor() { }

  ngOnInit(): void { }
}
