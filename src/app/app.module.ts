import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SessionService } from "./session.service";
import { DashboardGuard } from "./dashboard.guard";
import { SignInModule } from "./sign-in/sign-in.module";
import { SignInComponent } from "./sign-in/sign-in.component";

const appRoutes: Routes = [
  {
    path: 'login', component: SignInComponent
  },
  {
    path: '**', component: DashboardComponent, canActivate: [DashboardGuard], pathMatch: 'full'
  }
]

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent    
  ],
  imports: [
    BrowserModule,
    SignInModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [SessionService, DashboardGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
