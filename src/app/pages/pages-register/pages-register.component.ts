import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-pages-register',
  templateUrl: './pages-register.component.html',
  styleUrls: ['./pages-register.component.css']
})
export class PagesRegisterComponent implements OnInit {
  firstname!: string;
  lastname!: string;
  email!: string;
  password!: string;
  constructor(private authService: AuthService, private router: Router) {
    this.authService.isLoggedIn$.subscribe(isLoggedIn =>
      isLoggedIn && router.navigate(['/dashboard']))
  }

  ngOnInit(): void {
  }
  signup() {
    this.authService.signup(this.firstname, this.lastname, this.email, this.password).subscribe((response) => {
      console.log(response);
      alert("Compte creé ! Veuillez vous connecter.")
      this.router.navigate(['/login']);
    },
      err => alert(err.error.msg))
  }

}
