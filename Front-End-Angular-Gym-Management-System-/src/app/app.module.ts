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
import { TrainerComponent } from './components/trainer/trainer.component';
import { TopComponent } from './components/top/top.component';
import { ClassDetailsComponent } from './components/class-details/class-details.component';
import { TrainerDetailComponent } from './components/trainer-detail/trainer-detail.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PaymentComponent } from './components/payment/payment.component';

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
    TrainerComponent,
    TopComponent,
    ClassDetailsComponent,
    TrainerDetailComponent,
    PaymentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
