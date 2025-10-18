import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Peca } from './peca/peca';
import { PecaList } from './peca-list/peca-list';
import { PecaEdit } from './peca-edit/peca-edit';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { PecaRoutingModule } from './peca-routing-module';



@NgModule({
  declarations: [
    Peca,
    PecaList,
    PecaEdit
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    PecaRoutingModule
  ]
})
export class PecaModule { }
