import { MagazzinoService } from './../magazzino.service';
import { Subscription } from 'rxjs';
import { Imagazzino } from './../magazino';
import { Component, OnInit, OnDestroy } from '@angular/core';


@Component({
  selector: 'app-lista-magazzino',
  templateUrl: './lista-magazzino.component.html',
  styleUrls: ['./lista-magazzino.component.scss']
})
export class ListaMagazzinoComponent implements OnInit, OnDestroy {
  titolo: string = 'Warehouse';
  errorMessage = '';

  datiMagazzino : Imagazzino[] = [];
  subscription!: Subscription;

  constructor(private magazzinoService: MagazzinoService) { }

  ngOnInit(): void {
    this.subscription = this.magazzinoService.getDatiMagazzino().subscribe({
      next: datiMagazzino => {
        this.datiMagazzino = datiMagazzino;
      },
      error: err => this.errorMessage = err
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
