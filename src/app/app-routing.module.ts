import {RouterModule, Routes} from '@angular/router';
import {AppComponent} from './app.component';
import {NgModule} from '@angular/core';
import {WelcomeComponent} from './welcome.component/welcome.component';
import {AuthGuard} from './share/services/AuthGuard';
import {LoginComponent} from './login.component/login.component';


const routes: Routes = [
  { path: '', component: WelcomeComponent, pathMatch: 'full', canActivate: [AuthGuard], },
  { path: 'login', component: LoginComponent},
  { path: 'credit-history-request', component: AppComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
