import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router'; // Import Router
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  credentials = { email: '', password: '' };

  constructor(private http: HttpClient, private router: Router) {}

  onLogin() {
    console.log(this.credentials); 
    this.http.post('http://localhost:8080/member/login', this.credentials).subscribe({
      next: (response) => {
        console.log('Login successful:', response);
        this.router.navigate(['/dashboard']);
      },
      error: (error) => {
        console.error('Login failed:', error);
        alert('Login failed: ' + (error.error?.message || error.message));
      }
    });
  }
}
