import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MagazzinoDettagliComponent } from './magazzino-dettagli.component';

describe('MagazzinoDettagliComponent', () => {
  let component: MagazzinoDettagliComponent;
  let fixture: ComponentFixture<MagazzinoDettagliComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MagazzinoDettagliComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MagazzinoDettagliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
