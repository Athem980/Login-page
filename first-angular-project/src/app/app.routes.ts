import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../Components/login/login.component';
import { Signup1 } from '../Components/signup1/signup1.component';
import { Signup2 } from '../Components/signup2/signup2.component';

export const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'signup-step1', component: Signup1 },
  { path: 'signup-step2', component: Signup2 },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
