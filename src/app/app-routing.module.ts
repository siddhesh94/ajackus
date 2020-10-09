import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LinkedinSignupComponent } from './linkedin-signup/linkedin-signup.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { ThankyouComponent } from './thankyou/thankyou.component';


const routes: Routes = [
  {path:'',component:LinkedinSignupComponent},
  {path:'signup-form',component:SignupFormComponent},
  {path:'thankyou',component:ThankyouComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
