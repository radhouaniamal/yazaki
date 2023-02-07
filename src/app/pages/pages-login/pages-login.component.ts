import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-pages-login',
  templateUrl: './pages-login.component.html',
  styleUrls: ['./pages-login.component.css']
})
export class PagesLoginComponent implements OnInit {
//private authService: AuthService,
  constructor( private router: Router) { 
  
  }

  ngOnInit(): void {
  }
  login() {
   
        this.router.navigate(['/admin']);
   
}
}
