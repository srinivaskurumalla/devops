import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/feature1/home/home.component';

const routes: Routes = [
  {path:'', redirectTo:'/home', pathMatch:'full'},
  { path: 'feature1', loadChildren: () => import('./components/feature1/feature1.module').then(m => m.Feature1Module) },
  { path: 'feature2', loadChildren: () => import('./components/feature2/feature2.module').then(m => m.Feature2Module) },
  { path: '**',component:HomeComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
