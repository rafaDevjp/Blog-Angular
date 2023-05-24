import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PosteService {

  private fullText: string = "Em algum momento na sua vida, principalmente profissional você precisará usar técnicas de design para coisas que você produz, especialmente quando se trata de negócios e marketing.Mesmo que você não tenha habilidades de design ou qualquer conhecimento técnico de design, você ainda pode aplicar algumas técnicas e se preocupar com o design, seja em suas peças publicitárias, em seus sites e aplicativos, ou até mesmo em artes para redes sociais e blogs."

  private poste = [
    {
      id: 4,
      "slug":'Design-gráfico-e-arte-urbana-como-ferramentas-para-o-desenvolvimento-social',
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
      "id": 1,
      "slug":'Angular-16-para-melhorar-a-renderização-do-lado-do-servidor',
      "imagem":     'https://images.idgesg.net/images/article/2020/02/cia-triad_security_triangle-glowing_binary_process_by-nolimit46-getty_2400x1600-100831589-large.jpg?auto=webp&quality=85,70',
      "descricao":  'Angular 16 para melhorar a renderização do lado do servidor',
      "titulo":     'Angular 16 para melhorar a renderização do lado do servidor',
      "texto":      'Agora que o Angular 15 chegou , os desenvolvedores da estrutura da Web baseada em TypeScript, criada pelo Google, estão de olho em melhorias na renderização do lado do servidor e no desempenho do tempo de execução para uma versão planejada do Angular 16. Previsivelmente previsto para maio de 2023, o Angular 16 exploraria a hidratação e as melhorias na usabilidade da renderização do lado do servidor, sendo a primeira etapa a hidratação não destrutiva. Essa técnica permitiria a reutilização do DOM do lado do servidor e, em vez de renderizá-lo novamente, apenas anexaria ouvintes de eventos e criaria estruturas de dados necessárias para o tempo de execução do Angular. Como próximo passo, os planos pedem uma maior exploração do espaço em evolução dinâmica de hidratação parcial e retomada. Cada abordagem tem compensações e os construtores do Angular gostariam de tomar uma decisão informada sobre uma solução ideal de longo prazo.',
      "registro": "",
      "introducao": "O desempenho do tempo de execução e as atividades assíncronas também merecem atenção na atualização planejada para a popular estrutura da web."
    },
    {
      "id": '2',
      "slug":'Engenheiro-do-Google-descreve-o-que-vem-a-seguir-para-o-Angular',
      "imagem":     'https://cdn.thenewstack.io/media/2022/09/28eede97-shutterstock_1450234691.jpg',
      "descricao":  'Google descreve o que vem a seguir para o Angular',
      "titulo":     'Engenheiro do Google descreve o que vem a seguir para o Angular',
      "texto":      'O lançamento da versão 15 do Angular está planejado para novembro, quando o Google apresentará rastreamentos de pilha amigáveis ​​para ajudar a identificar com precisão onde estão os erros de código, bem como uma maneira de otimizar os componentes da imagem que produzirão melhorias significativas na primeira pintura de conteúdo de um site, disse Emma Twersky , um engenheiro de relações com desenvolvedores do Google. Twersky apresentou "O que há de novo com o Angular" na conferência Progress 360 deste mês em Boston, Massachusetts. Apesar do título, boa parte da palestra focou nas iterações anteriores do Angular e como essas mudanças lançaram as bases para o que o Google fará a seguir com Angular. O Google está iterando rapidamente com o Angular - as versões 12 e 13 foram lançadas no ano passado com a versão 14 lançada em junho deste ano. Todo esse trabalho - incluindo Ivy - estava realmente preparando o terreno "sob o capô" para fazer futuras melhorias na estrutura, disse Twersky. Ivy é o nome do pipeline de compilação e renderização de próxima geração do Angular, que substituiu o View Engine como padrão na versão 9 do Angular. "O Projeto Ivy foi anunciado, talvez prematuramente, mas há muito tempo e demorou muito para ser desenvolvido", disse Twersky aos desenvolvedores. “Foi uma reescrita completa e a melhor analogia que posso dar é que foi como substituir o motor de um carro enquanto ele ainda estava em movimento.” Esse novo mecanismo deu ao Angular melhor verificação de tipo, relatório de erros, depuração, tamanhos de pacotes menores; mas o que realmente fez foi permitir melhorias futuras planejadas pelo Google. Com o Ivy completo, o Google viu uma redução de 90% nos recursos computacionais, o que por sua vez levou a cerca de 50 minutos de tempo reduzido para a construção do maior aplicativo Angular do Google, disse ela',
      "registro": "",
      "introducao": "O Google diz que mais suporte para autônomos completos, melhor capacidade de oscilação da árvore e mais solicitação de comentários estão no horizonte para o Angular."
    },
    {
      "id": '3',
      "slug":'Como-instalar-o-AngularCLI-no-Linux-usando-Nodjs',
      "imagem":     'https://www.edivaldobrito.com.br/wp-content/uploads/2019/07/angularcli-no-linux-usando-nodjs.jpg.webp',
      "descricao":  'AngularCLI no Linux usando Nodjs',
      "titulo":     'Como instalar o AngularCLI no Linux usando Nodjs',
      "texto":      'Atualmente, o campo de desenvolvimento de aplicações web é bastante competitivo. Todos os dias há mais ferramentas focadas nessa área. Desses aspectos, o front end se destaca por ser a porta de entrada do aplicativo. De fato, para muitos usuários, o aspecto gráfico é o primeiro critério de avaliação que conta ao avaliar um aplicativo. No front end de um aplicativo web, encontramos o Javascript que adiciona dinamismo ao HTML. Do Javascript, existem muitos frameworks, mas o mais popular é o Angular. Angular é uma estrutura de JavaScript para criar o lado frontal usando o padrão MVC. Foi criado em 2009 pelo Google e está se tornando cada vez mais popular. Graças ao Angular, poderemos acelerar o trabalho a partir do front end usando muitas funcionalidades JavaScript perfeitamente organizadas. Sua metodologia é o SPA, ou seja, single page application (aplicativo de página única). Por outro lado, o Angular está sendo amplamente utilizado em uma nova pilha chamada MEAN (MongoDB, ExpressJS, Angular e NodeJS) onde você pode criar outros tipos de aplicativos web. Para ter uma ferramenta para gerenciar melhor o Angular, é que o AngularCLI surge AngularCLI é uma interface de linha de comando para Angular, com isso, podemos criar um aplicativo que já funciona, logo de cara. Então, se você usa o Angular ou quer aprender, você precisa instalar o AngularCLI. E, neste tutorial, veremos como instalar o AngularCLI, a ferramenta com a qual você pode criar projetos no Angular. ',
      "registro": "",
      "introducao": "Se você quer gerenciar melhor o frameworks Javascript Angular, conheça e veja como instalar o AngularCLI no Linux usando Nodjs."
    },
    {
      id: 4,
      "slug":'Design-gráfico-e-arte-urbana-como-ferramentas-para-o-desenvolvimento-social',
      "imagem": '/assets/image/cards/pexels-antoni-shkraba-6322369.jpg',
      "descricao": 'An elephant at sunset',
      "titulo": 'Design gráfico e arte urbana como ferramentas para o desenvolvimento social',
      "texto": 'O Pimp my Carroça é um programa que utiliza a arte como instrumento de conscientização, engajamento e transformação social e objetiva conquistar a inclusão social para catadores de materiais recicláveis, carroceiros e seus familiares, bem como vislumbrar melhores condições de trabalho. Com o objetivo de melhorar a vida desses trabalhadores e alertar a sociedade sobre a importância destes para o funcionamento das cidades, o grafiteiro Mundano criou o projeto cujo nome é uma paródia dos programas de TV que “tunam”, reformam carros',
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
