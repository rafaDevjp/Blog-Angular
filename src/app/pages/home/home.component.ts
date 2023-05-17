import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  fullText: string = "Em algum momento na sua vida, principalmente profissional você precisará usar técnicas de design para coisas que você produz, especialmente quando se trata de negócios e marketing.Mesmo que você não tenha habilidades de design ou qualquer conhecimento técnico de design, você ainda pode aplicar algumas técnicas e se preocupar com o design, seja em suas peças publicitárias, em seus sites e aplicativos, ou até mesmo em artes para redes sociais e blogs."

 
  listCards = [
    {
      imagem:     '/assets/image/cards/art-inspiration-945x671.jpg',
      descricao:  'design simples',
      titulo:     'Design para Marketing que Todos Não-Designers Deveriam Saber',
      texto:      this.fullText
    },
    {
      imagem:     '/assets/image/cards/art-inspiration-945x671.jpg',
      descricao:  'design simples',
      titulo:     'Design para Marketing que Todos Não-Designers Deveriam Saber',
      texto:      this.fullText
    },
    {
      imagem:     '/assets/image/cards/art-inspiration-945x671.jpg',
      descricao:  'design simples',
      titulo:     'Design para Marketing que Todos Não-Designers Deveriam Saber',
      texto:      this.fullText
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
