import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PosteService {

  private fullText: string = "Em algum momento na sua vida, principalmente profissional você precisará usar técnicas de design para coisas que você produz, especialmente quando se trata de negócios e marketing.Mesmo que você não tenha habilidades de design ou qualquer conhecimento técnico de design, você ainda pode aplicar algumas técnicas e se preocupar com o design, seja em suas peças publicitárias, em seus sites e aplicativos, ou até mesmo em artes para redes sociais e blogs."

  private poste = [
    {
      id: 4,
      "slug":'',
      "imagem": '/assets/image/cards/pexels-antoni-shkraba-6322369.jpg',
      "descricao": 'An elephant at sunset',
      "titulo": 'Design gráfico e arte urbana como ferramentas para o desenvolvimento social',
      "texto": 'O Pimp my Carroça é um programa que utiliza a arte como instrumento de conscientização, engajamento e transformação social e objetiva conquistar a inclusão social para catadores de materiais recicláveis, carroceiros e seus familiares, bem como vislumbrar melhores condições de trabalho. Com o objetivo de melhorar a vida desses trabalhadores e alertar a sociedade sobre a importância destes para o funcionamento das cidades, o grafiteiro Mundano criou o projeto cujo nome é uma paródia dos programas de TV que “tunam”, reformam carros',
      "registro": "",
      "introducao": "O Pimp my Carroça é um programa que utiliza a arte como instrumento de conscientização, engajamento e transformação social e objetiva conquistar"
    }
    
  ]

  private listCards = [
    {
      "id": '1',
      "slug":'',
      "imagem":     '/assets/image/cards/art-inspiration-945x671.jpg',
      "descricao":  'design simples',
      "titulo":     'Design para Marketing que Todos Não-Designers Deveriam Saber',
      "texto":      this.fullText,
      "registro": "",
      "introducao": "O Pimp my Carroça é um programa que utiliza a arte como instrumento de conscientização, engajamento e transformação social e objetiva conquistar"
    },
    {
      "id": '2',
      "slug":'',
      "imagem":     '/assets/image/cards/art-inspiration-945x671.jpg',
      "descricao":  'design simples',
      "titulo":     'Design para Marketing que Todos Não-Designers Deveriam Saber',
      "texto":      this.fullText,
      "registro": "",
      "introducao": "O Pimp my Carroça é um programa que utiliza a arte como instrumento de conscientização, engajamento e transformação social e objetiva conquistar"
    },
    {
      "id": '3',
      "slug":'',
      "imagem":     '/assets/image/cards/art-inspiration-945x671.jpg',
      "descricao":  'design simples',
      "titulo":     'Design para Marketing que Todos Não-Designers Deveriam Saber',
      "texto":      this.fullText,
      "registro": "",
      "introducao": "O Pimp my Carroça é um programa que utiliza a arte como instrumento de conscientização, engajamento e transformação social e objetiva conquistar"
    }
  ]



  constructor() { }

  postagens(){
    return this.poste;
  }
  listPostagens(){
    return this.listCards;
  }


}
