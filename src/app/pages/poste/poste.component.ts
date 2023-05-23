import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PosteService } from 'src/app/core/services/poste.service';
import { Poste } from 'src/app/shared/models/poste';

@Component({
  selector: 'app-poste',
  templateUrl: './poste.component.html',
  styleUrls: ['./poste.component.scss']
})
export class PosteComponent implements OnInit {
  listPostes: Poste[]=[];
  poste: Poste | undefined
  constructor(
    private postService: PosteService,
   private activeRouter: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.activeRouter.paramMap.subscribe(res => {
      let Id = res.get("id")
      console.log(Id);
      this.setValueToposte(Id);
    })
    this.listPostes = this.postService.listPostagens()
  }

  setValueToposte(id:any){
    const result: Poste = this.postService.listPostagens().filter(post => post.id == id)[0];

    this.poste = {
      id: result.id,
      slug: result.slug,
      imagem: result.imagem,
      descricao: result.descricao,
      titulo: result.titulo,
      texto: result.texto,
      registro: result.registro,
      introducao: result.introducao,
    };

    console.log(":::: Poste selecionado ::::", this.poste);
    

  }

}
