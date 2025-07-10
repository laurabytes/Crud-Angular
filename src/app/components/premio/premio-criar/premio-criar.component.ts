// import { Premio } from './../../../models/premio';
import { Premio } from '../../../models/premio';
import { Router, RouterModule } from '@angular/router';
import { PremioService } from '../../../services/premio.service';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { PremioStatus } from '../../../enums/premiostatus';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-Premio-criar',
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './Premio-criar.component.html',
  styleUrl: './Premio-criar.component.css'
})
export class PremioCriarComponent {
  form!: FormGroup;

  constructor(private PremioService: PremioService, private router : Router){}

  statusOption: {id: number, descricao: string}[] =[]


  ngOnInit(): void {


    this.statusOption = Object.keys(PremioStatus)
    .filter(key=> isNaN(Number(key)))
    .map(key => ({
      id: PremioStatus [key as keyof typeof PremioStatus],
      descricao: key
    }));

    this.form = new FormGroup ({
      nome: new FormControl('', [Validators.required]),
      representanteNome: new FormControl('', [Validators.required]),
      status: new FormControl('', [Validators.required])
    })
  }

  get f(){
    return this.form.controls;
  }

  submit(){
    const formValue =this.form.value;

    const payload ={
      ...formValue,
      status: Number(formValue.status)
    }

    this.PremioService.criar(payload).subscribe((response :any)=> {
      this.router.navigateByUrl('./');
    })
  }

}
