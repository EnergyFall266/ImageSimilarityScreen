import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PesquisaImagemComponent } from './pesquisa-imagem.component';

describe('PesquisaImagemComponent', () => {
  let component: PesquisaImagemComponent;
  let fixture: ComponentFixture<PesquisaImagemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PesquisaImagemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PesquisaImagemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
