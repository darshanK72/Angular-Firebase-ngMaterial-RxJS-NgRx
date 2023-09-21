import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent {

  constructor(private authService:AuthService,private router:Router){}

  logout(){
    this.authService.logout()
  }

  cancle(){
    this.router.navigate(["dashboard"]);
  }
}
