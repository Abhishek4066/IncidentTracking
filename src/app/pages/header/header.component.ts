import { Component, inject } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { LoggedUser } from '../../model/User';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-header',
  imports: [RouterOutlet,RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  loggedUserData: LoggedUser = new LoggedUser;
  
  router = inject(Router);

  constructor(){
    
    const Data = localStorage.getItem('IncidentUser');
    if(Data != null){
      
      this.loggedUserData = JSON.parse(Data);
      
    }
  }

  onLogOff(){

    localStorage.removeItem('IncidentUser');
    this.router.navigateByUrl('/login');
  }
}
