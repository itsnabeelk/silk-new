import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CategoriesComponent } from './pages/categories/categories.component';
import { ContactComponent } from './pages/contact/contact.component';
import { CategoriesInnerComponent } from './pages/categories-inner/categories-inner.component';
import { CategoryMainComponent } from './pages/category-main/category-main.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'categories',
    component: CategoriesComponent,
  },
  {
    path: 'contact',
    component: ContactComponent,
  },
  {
    path: 'categories-inner',
    component: CategoriesInnerComponent,
  },
  {
    path: 'category-main',
    component: CategoryMainComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
