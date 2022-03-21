import { MagazzinoService } from './../magazzino.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Imagazzino } from './../magazino';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-magazzino-dettagli',
  templateUrl: './magazzino-dettagli.component.html',
  styleUrls: ['./magazzino-dettagli.component.scss']
})
export class MagazzinoDettagliComponent implements OnInit {
  pageTitle = 'warehouse Detail';
  errorMessage = '';
  datoMagazzino: Imagazzino | undefined;




  constructor(private route: ActivatedRoute, 
              private MagazzinoService: MagazzinoService,
              private router: Router) {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (id) {
      this.getDatoMagazzino(id);
    }
   }
  
  ngOnInit(): void {
  }

  getDatoMagazzino(id: number): void {
    this.MagazzinoService.getDatoMagazzino(id).subscribe({
      next: product => this.datoMagazzino = product,
      error: err => this.errorMessage = err
    });
  }

  onBack(): void {
    this.router.navigate(['/products']);
  }
}
