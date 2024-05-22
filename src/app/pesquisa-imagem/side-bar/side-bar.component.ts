import { Component, Input } from '@angular/core';
import { MessageService } from 'primeng/api';

import { VP_BPM } from 'src/beans/VP_BPM';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent {
  @Input() vp!: VP_BPM;
  visible: boolean = false;
  sidebarVisible: boolean = true;

  constructor(private messageService: MessageService) {}

  showDialog() {
    this.visible = true;
  }

  onUploadBanco() {
    this.messageService.add({
      severity: 'info',
      summary: 'Arquivo(s) enviado(s) para o banco de dados',
      detail: '',
    });
    this.visible = false;
  }

  searchUpload() {
    this.messageService.add({
      severity: 'info',
      summary: 'File Uploaded',
      detail: '',
    });
  }

  clearBanco() {
    this.messageService.add({
      severity: 'info',
      summary: 'Banco de dados limpo',
      detail: '',
    });
  }
}

