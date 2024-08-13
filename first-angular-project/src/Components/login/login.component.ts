import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../app/auth.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  standalone: true,
  imports: [FormsModule, NgIf],
})
export class LoginComponent {
  identifier = '';
  password = '';
  errorMessage = '';

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit() {
    if (this.authService.checkUserExists(this.identifier)) {
      if (this.authService.validatePassword(this.identifier, this.password)) {
        alert('Login successful!');
      } else {
        this.errorMessage = 'Invalid password';
      }
    } else {
      this.router.navigate(['/signup-step1'], {
        queryParams: { identifier: this.identifier },
      });
    }
  }
}
