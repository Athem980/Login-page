import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../app/auth.service';

@Component({
  selector: 'app-signup-step1',
  templateUrl: './signup1.component.html',
  styleUrls: ['./signup1.component.css'],
  standalone: true,
  imports: [FormsModule],
})
export class Signup1 implements OnInit {
  identifier: string = '';
  name: string = '';
  password: string = '';

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private authService: AuthService
  ) {}

  ngOnInit() {
    const data = this.authService.getSignUpData();
    this.identifier = data.identifier;
    this.name = data.name;
    this.password = data.password;

    this.route.queryParams.subscribe((params) => {
      if (params['identifier']) {
        this.identifier = params['identifier'];
      }
    });
  }

  onContinue() {
    this.authService.saveSignUpData({
      identifier: this.identifier,
      name: this.name,
      password: this.password,
    });

    this.router.navigate(['/signup-step2'], {
      queryParams: {
        identifier: this.identifier,
        name: this.name,
        password: this.password,
      },
    });
  }
}
