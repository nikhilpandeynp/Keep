import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GoogleSignInComponent } from './google-sign-in/google-sign-in.component';
import { SignInComponent } from "./sign-in.component";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [GoogleSignInComponent, SignInComponent],
  exports: [SignInComponent]
})
export class SignInModule { }