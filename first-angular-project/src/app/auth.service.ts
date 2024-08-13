import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private users = [
    { email: 'test@example.com', phone: '1234567890', password: 'password123' },
    { email: 'user@example.com', phone: '0987654321', password: 'password456' },
  ];

  private allowedOrganizations = [
    { id: 'org001', name: 'Company A' },
    { id: 'org002', name: 'Company B' },
  ];

  private signUpData = {
    identifier: '',
    name: '',
    password: '',
    orgName: '',
    designation: '',
    birthDate: '',
    city: '',
    pincode: '',
  };

  checkUserExists(identifier: string): boolean {
    return this.users.some(
      (user) => user.email === identifier || user.phone === identifier
    );
  }

  validatePassword(identifier: string, password: string): boolean {
    return this.users.some(
      (user) =>
        (user.email === identifier || user.phone === identifier) &&
        user.password === password
    );
  }

  getOrganizations() {
    return this.allowedOrganizations;
  }

  isOrganizationValid(orgName: string): boolean {
    return this.allowedOrganizations.some((org) => org.name === orgName);
  }

  saveSignUpData(data: any) {
    this.signUpData = { ...this.signUpData, ...data };
  }

  getSignUpData() {
    return this.signUpData;
  }
}
