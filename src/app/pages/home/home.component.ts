import { Component, OnInit } from '@angular/core';
import { PosteService } from 'src/app/core/services/poste.service';
import { Poste } from 'src/app/shared/components/models/poste';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  poste: Poste | undefined;
  listCards:any;

  constructor(
    private postService: PosteService
  ) {}

  ngOnInit(): void {
    let posteMain: Poste[] = this.postService.postagens();
    let listCard:  Poste[] = this.postService.listPostagens();
    this.poste = posteMain[0]
    this.listCards = listCard
  }

}
