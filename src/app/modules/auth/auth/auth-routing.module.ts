import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth.component';
import { LoginComponent } from './components/login/login.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';

const routes: Routes = [
  {path:"" , component: AuthComponent,children:[
    {path:'',redirectTo:"SignUp", pathMatch:"full"},
    {path:'SignUp',component:SignUpComponent},
    {path:'login',component:LoginComponent},

  ]
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }

