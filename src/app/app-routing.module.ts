import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { LoginComponent } from './components/login/login.component';
import { AuthGuardServiceService } from './service/gaurds/auth-guard-service.service';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', component: LoginComponent},
  { path: 'about', component: AboutComponent , canActivate: [AuthGuardServiceService]},
  { path: 'home', component: HomeComponent , canActivate: [AuthGuardServiceService]},
  { path: '**', component: PageNotFoundComponent,  canActivate: [AuthGuardServiceService]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
