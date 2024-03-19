import { Component, Input } from '@angular/core';
import { VP_BPM } from 'src/beans/VP_BPM';

@Component({
  selector: 'app-pesquisa-imagem',
  templateUrl: './pesquisa-imagem.component.html',
  styleUrls: ['./pesquisa-imagem.component.scss']
})
export class PesquisaImagemComponent {
  @Input() vp!: VP_BPM;
}
