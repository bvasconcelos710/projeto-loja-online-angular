import { Component, OnInit } from '@angular/core';
import { IProduto } from '../produtos';
import { ProdutosService } from '../produtos.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {
  produtos: IProduto[] | undefined;

  constructor(
    private produtosService: ProdutosService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    const produtos = this.produtosService.getAll();
    this.route.queryParamMap.subscribe(params => {
      const nome = params.get("nome")?.toLowerCase();
      if (nome) {
        this.produtos = produtos.filter(produto => produto.nome.toLowerCase().includes(nome));
        return;
      }
      this.produtos = produtos;
    })
    //this.produtos = this.produtosService.getAll();
  }
}
