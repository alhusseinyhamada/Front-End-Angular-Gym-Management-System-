import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { BodyComponent } from './components/body/body.component';
import { ClassDetailsComponent } from './components/class-details/class-details.component';
import { ClassComponent } from './components/class/class.component';
import { HomeComponent } from './components/home/home.component';
import { MainLayoutComponent } from './components/main-layout/main-layout.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ShopComponent } from './components/shop/shop.component';
import { TrainerDetailComponent } from './components/trainer-detail/trainer-detail.component';
import { TrainerComponent } from './components/trainer/trainer.component';


const routes: Routes = [{path:"",component: MainLayoutComponent,children:[
  {path:"",redirectTo:'home',pathMatch:'full'},//Default Path
  {path:'home',component:HomeComponent},
  {path:'contact',component:BodyComponent},
  {path:'classes',component:ClassComponent},
  {path:"classes/details",component:ClassDetailsComponent},
  {path:'about',component:AboutComponent},
  {path:'trainers',component:TrainerComponent},
  {path:'trainerdetails',component:TrainerDetailComponent},
  {path:'shop',component:ShopComponent},





]},
{path:'**',component:NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
