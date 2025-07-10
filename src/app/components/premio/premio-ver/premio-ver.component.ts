// import { Premio } from './../../../models/premio';
import { PremioService } from '../../../services/premio.service';
import { Premio } from '../../../models/premio';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';

@Component({
  selector: 'app-premio-ver',
  imports: [RouterModule],
  templateUrl: './premio-ver.component.html',
  styleUrl: './premio-ver.component.css'
})
export class PremioVerComponent implements OnInit{

  premio!: Premio;

  constructor(private premioService: PremioService, private route: ActivatedRoute){}

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];

    // this.statusOptions = Object.keys(PremioStatus)

    this.obterDadosPremios(id);
  }

  obterDadosPremios(idPremio: number){
    this.premioService.ver(idPremio).subscribe(response => {
      // this.Premio = response;
      this.premio = {
        ...response,
      }
    })
  }

}
