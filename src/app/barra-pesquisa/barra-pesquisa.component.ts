import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-barra-pesquisa',
  templateUrl: './barra-pesquisa.component.html',
  styleUrls: ['./barra-pesquisa.component.css']
})
export class BarraPesquisaComponent implements OnInit {
  nome = "";
  constructor(private router: Router) { }

  ngOnInit(): void { }

  pesquisar() {
    if (this.nome) {
      this.router.navigate(["produtos"], { queryParams: { nome: this.nome } });
      return;
    }
    this.router.navigate(["produtos"]);
  }
}