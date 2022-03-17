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

  datiMagazzino: Imagazzino[] = [];
  datiMagazzinoFiltrati: Imagazzino[] = [];
  subscription!: Subscription;

  private _listFilter = '';
  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(value: string) {
    this._listFilter = value;
    this.datiMagazzinoFiltrati = this.performFilter(value);
  }

  constructor(private magazzinoService: MagazzinoService) { }

  ngOnInit(): void {
    this.subscription = this.magazzinoService.getDatiMagazzino().subscribe({
      next: datiMagazzino => {
        this.datiMagazzino = datiMagazzino;
        this.datiMagazzinoFiltrati = datiMagazzino;
      },
      error: err => this.errorMessage = err
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  performFilter(filterBy: string): Imagazzino[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.datiMagazzino.filter((magazzino: Imagazzino) => magazzino.nomeProdotto.toLocaleLowerCase().includes(filterBy));
  }
}
