import { Component } from '@angular/core';
import {MediaObserver} from '@angular/flex-layout';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'TexoIT';

  constructor(public mediaObserver: MediaObserver) { 
    mediaObserver.asObservable().subscribe((e) => {
      //console.log(e);
    });
  }

  public isVisibleOnMobile() {
    console.log('Ativou mobile');
  }

  public isVisibleOnDesktop() {
    console.log('Ativou desktop');
  }
}