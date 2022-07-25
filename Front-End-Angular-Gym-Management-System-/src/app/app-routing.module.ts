import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BodyComponent } from './components/body/body.component';
import { HomeComponent } from './components/home/home.component';
import { MainLayoutComponent } from './components/main-layout/main-layout.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
// const routes: Routes = [

// ];

const routes: Routes = [{path:"",component: MainLayoutComponent,children:[
  {path:"",redirectTo:'home',pathMatch:'full'},//Default Path
  {path:'home',component:HomeComponent},
  {path:'contact',component:BodyComponent},

]},{path:'**',component:NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
