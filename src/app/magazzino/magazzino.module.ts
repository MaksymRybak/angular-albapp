import { MagazzinoDettagliComponent } from './magazzino-dettagli/magazzino-dettagli.component';
import { ListaMagazzinoComponent } from './lista-magazzino/lista-magazzino.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    ListaMagazzinoComponent,
    MagazzinoDettagliComponent
  ],
  imports: [
    RouterModule.forChild([
      { path: 'warehouse', component: ListaMagazzinoComponent},
      { path: 'warehouse/:id', component: MagazzinoDettagliComponent},
    ]),
    BrowserModule,
    HttpClientModule,
    FormsModule,
    CommonModule,
    SharedModule
  ]
})
export class MagazzinoModule { }
