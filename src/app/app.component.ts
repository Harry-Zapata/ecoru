import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  standalone: false
})
export class AppComponent implements OnInit {
  darkMode = false;
  title = 'interfaces_f';
  modalSwitch!: boolean;

  ngOnInit(): void {
    let darkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    this.modalSwitch = darkMode;
    this.cambiarModo();
  }

  toggleDarkMode() {
    this.darkMode = !this.darkMode;
  }


  cambiarModo() {
    if (this.modalSwitch) {
      let body = document.getElementsByTagName('body')[0] as HTMLElement;
      body.classList.add('dark');
    } else {
      let body = document.getElementsByTagName('body')[0] as HTMLElement;
      body.classList.remove('dark');
    }
    this.modalSwitch = !this.modalSwitch;
    this.verificarIcono();
  }

  verificarIcono(){
    if(!this.modalSwitch){
      let icon = document.getElementById('icon-mode') as HTMLElement;
      icon.classList.add('fa-sun');
      icon.classList.remove('fa-moon');
    }else{
      let icon = document.getElementById('icon-mode') as HTMLElement;
      icon.classList.add('fa-moon');
      icon.classList.remove('fa-sun');
    }
  }
}
