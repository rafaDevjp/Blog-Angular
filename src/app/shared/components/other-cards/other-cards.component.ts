import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-other-cards',
  templateUrl: './other-cards.component.html',
  styleUrls: ['./other-cards.component.scss']
})
export class OtherCardsComponent implements OnInit {

  @Input() imagem: string = "";
  @Input() descricao: string = "";
  @Input() titulo: string = "";
  @Input() texto: string = ""
  @Input() idCard: string = "";


  constructor() { 
    
  }



  ngOnInit(): void {
  }

}
