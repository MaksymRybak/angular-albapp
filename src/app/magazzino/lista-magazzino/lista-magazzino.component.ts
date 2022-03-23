import { MagazzinoService } from './../magazzino.service';
import { Subscription } from 'rxjs';
import { Imagazzino } from './../magazino';
import { StarEvent } from 'src/app/shared/star/star';
import { Component, OnInit, OnDestroy, OnChanges, SimpleChanges } from '@angular/core';


@Component({
  selector: 'app-lista-magazzino',
  templateUrl: './lista-magazzino.component.html',
  styleUrls: ['./lista-magazzino.component.scss']
})
export class ListaMagazzinoComponent implements OnInit, OnDestroy, OnChanges {
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
  ngOnChanges(changes: SimpleChanges): void {
    throw new Error('Method not implemented.');
  }

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

  onFilterChange(): void {
    // let self = this;
    this.datiMagazzinoFiltrati = this.datiMagazzinoFiltrati.filter((datoMagazzino: Imagazzino) => datoMagazzino.nomeProdotto.indexOf(this.listFilter) >= 0);
  }

  onRatingClicked(starEvent: StarEvent): void {
    this.titolo = 'Product List: ' + starEvent.getMessage();
  }
}
