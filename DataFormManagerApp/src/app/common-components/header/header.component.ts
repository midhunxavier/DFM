import { Component, OnInit , Input} from '@angular/core';
import {Router} from '@angular/router';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  name= localStorage.getItem('Username');
  isLoggedIn: boolean;

  constructor(private _router: Router, private _authService: AuthService) { }

  ngOnInit() {
    this.isLoggedIn = this._authService.loggedIn();
    
  }

  Logout() {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    localStorage.removeItem('wcToken');
    this._router.navigate(['/login']);
  }
  
  isUserLoggedIn(){
    return this._authService.loggedIn();
  }

  isUserNotConnectedChbase(){
    return !this._authService.ConnectedToChbase();
  }

  isUserConnectedChbase(){
    return this._authService.ConnectedToChbase();
  }

}
