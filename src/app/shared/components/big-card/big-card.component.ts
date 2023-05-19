import { Poste } from '../models/poste';
import { PosteService } from './../../../core/services/poste.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.scss']
})
export class BigCardComponent implements OnInit {

  @Input() imagem: any;
  @Input() titulo: any;
  @Input() texto: any;
  @Input() descricao: any;

  constructor(
  ) { }

  ngOnInit(): void {
    
  }

}
