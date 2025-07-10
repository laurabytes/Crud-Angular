import { Premio } from '../../models/premio';
import { PremioService } from '../../services/premio.service';
import { Component, OnInit } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { RouterModule } from '@angular/router';
import { PremioCriarComponent } from "./premio-criar/premio-criar.component";

@Component({
  selector: 'app-premio',
  imports: [MatFormFieldModule, MatInputModule, MatTableModule, RouterModule],
  templateUrl: './premio.component.html',
  styleUrl: './premio.component.css'
})
export class PremioComponent implements OnInit{

  premios = new MatTableDataSource<Premio>(); //dataSource "premios"

  displayedColumns: string[] = ['id', 'descricao', 'ordemPremiacao', 'status']; //coluna das informações

  constructor(private premioService: PremioService){

  }
  ngOnInit(): void {
    this.obterDados();
  }

  obterDados(){
    this.premioService.obterTodos().subscribe(response  =>{ //os dados que são chamados é gravado nesse response, pode ser qualquer nome esse response
      this.premios.data = response;
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.premios.filter = filterValue.trim().toLowerCase();
  }

  apagarPremio(idPremio: number){
    this.premioService.apagar(idPremio).subscribe(response => {
      alert("foi de arrasta");
      this.obterDados();
    });
  }
}
