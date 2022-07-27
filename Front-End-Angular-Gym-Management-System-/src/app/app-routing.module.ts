import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BodyComponent } from './components/body/body.component';
import { CalculatorComponent } from './components/calculator/calculator.component';
import { HomeComponent } from './components/home/home.component';
import { MainLayoutComponent } from './components/main-layout/main-layout.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AdminLayoutComponent } from './layout/admin-layout/admin-layout.component';

// const routes: Routes = [

// ];

const routes: Routes = [{path:"",component: MainLayoutComponent,children:[
  {path:"",redirectTo:'/Home',pathMatch:'full'},//Default Path
  {path:'Home',component:HomeComponent},
  {path:'contact',component:BodyComponent},
  {path:'calculator',component:CalculatorComponent},





]}, {path:'admin',component:AdminLayoutComponent,children:[
  {path:'',loadChildren:()=>import('./components/views/admin/dashboard/dashboard.module').then(m=>m.DashboardModule)},
  {path:'dashboard',loadChildren:()=>import('./components/views/admin/dashboard/dashboard.module').then(m=>m.DashboardModule)},

  {path:'products',loadChildren:()=>import('./components/views/admin/products/products.module').then(m=>m.ProductsModule)},
  {path:'addproduct',loadChildren:()=>import('./components/views/admin/addproduct/addproduct.module').then(m=>m.AddproductModule)},
  {path:'sessions',loadChildren:()=>import('./components/views/admin/sessions/sessions.module').then(m=>m.SessionsModule)},
  {path:'trainers',loadChildren:()=>import('./components/views/admin/trainers/trainers.module').then(m=>m.TrainersModule)},

  // {path:'calculator',loadChildren:()=>import('./components/calculator/calculator.module').then(m=>m.CalculatorModule)},

  {path:'adminlogin',loadChildren:()=>import('./components/views/admin/adminlogin/adminlogin.module').then(m=>m.AdminloginModule)},


]}




,{path:'**',component:NotFoundComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
