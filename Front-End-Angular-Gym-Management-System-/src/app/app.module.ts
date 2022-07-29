import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { BodyComponent } from './components/body/body.component';
import { MainLayoutComponent } from './components/main-layout/main-layout.component';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ClassComponent } from './components/class/class.component';
import { AboutComponent } from './components/about/about.component';
import {  ReactiveFormsModule,FormsModule } from '@angular/forms';
import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './shared/auth.interceptor';


import { TrainerComponent } from './components/trainer/trainer.component';
import { TopComponent } from './components/top/top.component';
import { ClassDetailsComponent } from './components/class-details/class-details.component';
import { TrainerDetailComponent } from './components/trainer-detail/trainer-detail.component';
import { TodayClassesComponent } from './components/today-classes/today-classes.component';
import { Next2DaysClassesComponent } from './components/next2-days-classes/next2-days-classes.component';
import { LoginService } from './services/login.service';
import { ShopComponent } from './components/shop/shop.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BodyComponent,
    MainLayoutComponent,
    HomeComponent,
    NotFoundComponent,
    ClassComponent,
    AboutComponent,
    SigninComponent,
    SignupComponent,
   
    UserProfileComponent,
   

    TrainerComponent,
    TopComponent,
    ClassDetailsComponent,
    TrainerDetailComponent,
    TodayClassesComponent,
    Next2DaysClassesComponent,
    ShopComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
     HttpClientModule,
        FormsModule

  ],
  providers: [ {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true,
  


  },
    LoginService],
 
  bootstrap: [AppComponent]
})
export class AppModule { }
