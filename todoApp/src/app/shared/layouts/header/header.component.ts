import { Component } from '@angular/core';
import { LoginService } from '../../../core/services/login.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  constructor(private loginServices: LoginService) {

  }
  onLogouth() {
    this.loginServices.onLogout()
  }
}
