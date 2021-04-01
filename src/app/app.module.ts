import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
//add
import Amplify, { Auth } from 'aws-amplify';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ADXSelphiIdComponent } from './adxselphi-id/adxselphi-id.component';
import { FacePhiSelphIdModule } from "facephi-selphid";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTabsModule } from '@angular/material/tabs';
import { ADXSelphiComponent } from './adxselphi/adxselphi.component';
import { FacePhiSelphiModule } from "facephi-selphi";
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { HomeComponent } from './home/home.component';

//add
Amplify.configure({
  Auth:{
    mandatorySignIn:true,
    region: 'us-east-1',
    userPoolId: 'us-east-1_wthuzBNrg',
    userPoolWebClientId: '583b9198ll3q9b36qf1cjcoil5',
    authenticationFlowType:'USER_PASSWORD_AUTH'
  }

});

@NgModule({
  declarations: [
    AppComponent,
    ADXSelphiIdComponent,
    ADXSelphiComponent,
    LoginComponent,
    SignUpComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    FacePhiSelphIdModule,
    MatTabsModule,
    FacePhiSelphiModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
