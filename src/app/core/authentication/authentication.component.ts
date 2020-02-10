import { Component, OnInit } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.scss'],
  animations: [
    trigger('bgImgTrigger', [
      state('registration', style({
        height: '575px',
        overflow: 'hidden',
      })),
      state('login',   style({
        height: '374px',
        overflow: 'hidden',
      })),
      transition('* => *', animate('400ms ease-in-out'))
    ])
  ]
})
export class AuthenticationComponent implements OnInit {

  title: string;
  closeBtnName: string;
  list: any[] = [];
  component: string;
 
  constructor(public bsModalRef: BsModalRef) {}
 
  ngOnInit() {
    this.list.push('PROFIT!!!');
  }

  closeModal(){
    this.bsModalRef.hide()
  }

  switchComponent(){
    if (this.component=="login"){
      this.title="HOME.AUTH.REGISTER.REGISTER"
      this.component="registration"
    }
    else{
      this.title="HOME.AUTH.LOGIN.LOGIN"
      this.component="login"
    }
  }

}
