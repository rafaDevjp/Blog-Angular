import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-other-cards',
  templateUrl: './other-cards.component.html',
  styleUrls: ['./other-cards.component.scss']
})
export class OtherCardsComponent implements OnInit {

  @Input() imagem: any;
  @Input() descricao: any;
  @Input() titulo: any;
  @Input() texto: any


  constructor() { }



  ngOnInit(): void {
  }

}
