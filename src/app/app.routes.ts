import { Routes } from '@angular/router';
import { LoginComponent } from './pages/components/login/login.component';
import { RegisterComponent } from './pages/components/register/register.component';
import { HomeComponent } from './pages/components/home/home.component';
import { NotfoundComponent } from './pages/components/notfound/notfound.component';
import { authGuard } from './core/guards/auth/auth.guard';
import { guestGuard } from './core/guards/guest/guest.guard';
import { ProductComponent } from './pages/components/product/product.component';
import { CategoryComponent } from './pages/components/category/category.component';
import { ProductdetailsComponent } from './pages/components/productdetails/productdetails.component';

export const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    {
        path: '',
        loadComponent: () => import('./layouts/components/aythlayout/aythlayout.component').then((c) => c.AythlayoutComponent),
        canActivate: [authGuard],
        children:
            [
                { path: 'login', component: LoginComponent, title: 'loginPage' },
                { path: 'register', component: RegisterComponent, title: 'regiosterPage' }
            ]
    },
    {
        path: '', canActivate: [guestGuard],
        loadComponent: () => import('./layouts/components/mainlayout/mainlayout.component').then((c) => c.MainlayoutComponent),
        children:
            [
                { path: 'home', component: HomeComponent, title: 'homePage' },
                { path: 'product', component: ProductComponent, title: 'productPage' },
                { path: 'category', component: CategoryComponent, title: 'categoryPage' },
                {path:'productdetails/:id' , component:ProductdetailsComponent , title:'ptoductDetailsPage'}
            ]
    },
    { path: '**', component: NotfoundComponent, title: 'notfoundPage' }
];
