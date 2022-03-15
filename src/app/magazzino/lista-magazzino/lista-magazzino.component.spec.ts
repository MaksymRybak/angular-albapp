import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaMagazzinoComponent } from './lista-magazzino.component';

describe('ListaMagazzinoComponent', () => {
  let component: ListaMagazzinoComponent;
  let fixture: ComponentFixture<ListaMagazzinoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaMagazzinoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaMagazzinoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
