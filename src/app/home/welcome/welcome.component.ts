import { Component, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit, OnDestroy, OnChanges {
  pageTitle = '';
  
  constructor() {
    this.pageTitle = "Welcome";
  }
  
  ngOnInit(): void {
    // impostare elementi del componente in un certo modo prima di mostrarli all'utente
  }

  ngOnDestroy(): void {
    // per chiedere conferma finale all'utente
  }

  ngOnChanges(changes: SimpleChanges): void {
    // per aggiornare i dati del componente quando cambiano i dati dell'input 
  }
}
