import { Component, Input } from '@angular/core';
import { MessageService } from 'primeng/api';
import { AppService } from 'src/app/app.service';
import { DataService } from 'src/app/app.service';

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

  constructor(private messageService: MessageService, private dataService: DataService) {}

  showDialog() {
    this.visible = true;
  }

  async onUploadBanco(event: any) {
    this.messageService.add({
      severity: 'info',
      summary: 'Arquivo(s) enviado(s) para o banco de dados',
      detail: '',
    });
    this.visible = false;
    console.log(event);

    const files: File[] = event.files;
    for (let file of files) {
      this.convertToBase64(file);
    }

  }
  convertToBase64(file: File): void {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      const base64String = reader.result as string;
      console.log(base64String);
    };
    reader.onerror = (error) => {
      console.error('Error: ', error);
    };
  }

  searchUpload(event: any) {
    this.messageService.add({
      severity: 'info',
      summary: 'File Uploaded',
      detail: '',
    });
console.log(event.files[0]);

let filename = event.files[0].name;
let file = event.files[0];
fs.writeFileSync("C:\Users\LEO\Documents\ImageSimilarityScreen\src\assets\image-search" + {filename} +".jpg", file, {
  flag: "w"
 })  }


  clearBanco() {
    this.messageService.add({
      severity: 'info',
      summary: 'Banco de dados limpo',
      detail: '',
    });
  }
}

