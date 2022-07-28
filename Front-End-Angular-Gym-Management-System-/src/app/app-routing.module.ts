import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { BodyComponent } from './components/body/body.component';
import { CalculatorComponent } from './components/calculator/calculator.component';
import { HomeComponent } from './components/home/home.component';
import { MainLayoutComponent } from './components/main-layout/main-layout.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AdminLayoutComponent } from './layout/admin-layout/admin-layout.component';

// const routes: Routes = [
import { ClassDetailsComponent } from './components/class-details/class-details.component';
import { ClassComponent } from './components/class/class.component';
// import { HomeComponent } from './components/home/home.component';
// import { MainLayoutComponent } from './components/main-layout/main-layout.component';
// import { NotFoundComponent } from './components/not-found/not-found.component';
import { TrainerDetailComponent } from './components/trainer-detail/trainer-detail.component';
import { TrainerComponent } from './components/trainer/trainer.component';


const routes: Routes = [{path:"",component: MainLayoutComponent,children:[
  {path:"",redirectTo:'home',pathMatch:'full'},//Default Path
  {path:'home',component:HomeComponent},
  {path:'contact',component:BodyComponent},
  {path:'calculator',component:CalculatorComponent},

  {path:'classes',component:ClassComponent},
  {path:"classes/details",component:ClassDetailsComponent},
  {path:'about',component:AboutComponent},
  {path:'trainers',component:TrainerComponent},
  {path:'trainerdetails',component:TrainerDetailComponent},



]}, {path:'admin',component:AdminLayoutComponent,children:[
  {path:'',loadChildren:()=>import('./components/views/admin/dashboard/dashboard.module').then(m=>m.DashboardModule)},
  {path:'dashboard',loadChildren:()=>import('./components/views/admin/dashboard/dashboard.module').then(m=>m.DashboardModule)},

  {path:'products',loadChildren:()=>import('./components/views/admin/products/products.module').then(m=>m.ProductsModule)},
  {path:'addproduct',loadChildren:()=>import('./components/views/admin/addproduct/addproduct.module').then(m=>m.AddproductModule)},
  {path:'sessions',loadChildren:()=>import('./components/views/admin/sessions/sessions.module').then(m=>m.SessionsModule)},
  {path:'trainers',loadChildren:()=>import('./components/views/admin/trainers/trainers.module').then(m=>m.TrainersModule)},
  // {path:'calculator',loadChildren:()=>import('./components/calculator/calculator.module').then(m=>m.CalculatorModule)},
  {path:'login',loadChildren:()=>import('./components/views/admin/adminlogin/adminlogin.module').then(m=>m.AdminloginModule)},


]}









,{path:'**',component:NotFoundComponent},



]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
