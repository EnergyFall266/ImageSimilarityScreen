import { Component, Input } from '@angular/core';
import { MessageService } from 'primeng/api';
import { VP_BPM } from 'src/beans/VP_BPM';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  providers: [MessageService],
})
export class HeaderComponent {
  @Input() vp!: VP_BPM;
  visible: boolean = false;


  constructor(private messageService: MessageService) {}

  showDialog() {
    this.visible = true;
  }

  onUpload( ) {
   

    this.messageService.add({
      severity: 'info',
      summary: 'File Uploaded',
      detail: '',
    });
    this.visible = false;
 
  }
}
