// import { Component, OnInit } from '@angular/core';
// import { Router, ActivatedRoute } from '@angular/router';
// import { AuthService } from '../../app/auth.service';
// import { FormsModule } from '@angular/forms';
// import { NgIf } from '@angular/common';
// interface Organization {
//   id: string;
//   name: string;
// }
// @Component({
//   selector: 'app-signup-step2',
//   templateUrl: './signup2.component.html',
//   styleUrls: ['./signup2.component.css'],
//   standalone: true,
//   imports: [FormsModule, NgIf],
// })
// export class Signup2 implements OnInit {
//   identifier: string = '';
//   name: string = '';
//   password: string = '';
//   orgName: string = '';
//   designation: string = '';
//   birthDate: string = '';
//   city: string = '';
//   pincode: string = '';
//   errorMessage: string = '';
//   organizations: Organization[] = [];

//   constructor(
//     private authService: AuthService,
//     private router: Router,
//     private route: ActivatedRoute
//   ) {}

//   ngOnInit() {
//     this.organizations = this.authService.getOrganizations();
//     this.route.queryParams.subscribe((params) => {
//       this.identifier = params['identifier'];
//       this.name = params['name'];
//       this.password = params['password'];
//     });
//   }

//   onContinue() {
//     if (this.authService.isOrganizationValid(this.orgName)) {
//       alert('Sign-up successful!');
//     } else {
//       this.errorMessage = 'Unknown organization-id';
//     }
//   }

//   onBack() {
//     this.router.navigate(['/signup-step1'], {
//       queryParams: {
//         identifier: this.identifier,
//         name: this.name,
//         password: this.password,
//       },
//     });
//   }
// }

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../app/auth.service';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';

interface Organization {
  id: string;
  name: string;
}

@Component({
  selector: 'app-signup-step2',
  templateUrl: './signup2.component.html',
  styleUrls: ['./signup2.component.css'],
  standalone: true,
  imports: [FormsModule, NgIf],
})
export class Signup2 implements OnInit {
  identifier: string = '';
  name: string = '';
  password: string = '';
  orgName: string = '';
  designation: string = '';
  birthDate: string = '';
  city: string = '';
  pincode: string = '';
  errorMessage: string = '';
  organizations: Organization[] = [];

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {
    this.organizations = this.authService.getOrganizations();
    const data = this.authService.getSignUpData();
    this.identifier = data.identifier;
    this.name = data.name;
    this.password = data.password;
    this.orgName = data.orgName;
    this.designation = data.designation;
    this.birthDate = data.birthDate;
    this.city = data.city;
    this.pincode = data.pincode;
  }

  onContinue() {
    this.authService.saveSignUpData({
      identifier: this.identifier,
      name: this.name,
      password: this.password,
      orgName: this.orgName,
      designation: this.designation,
      birthDate: this.birthDate,
      city: this.city,
      pincode: this.pincode,
    });

    if (this.authService.isOrganizationValid(this.orgName)) {
      alert('Sign-up successful!');
    } else {
      this.errorMessage = 'Unknown organization-id';
    }
  }

  onBack() {
    this.authService.saveSignUpData({
      identifier: this.identifier,
      name: this.name,
      password: this.password,
      orgName: this.orgName,
      designation: this.designation,
      birthDate: this.birthDate,
      city: this.city,
      pincode: this.pincode,
    });

    this.router.navigate(['/signup-step1']);
  }
}
