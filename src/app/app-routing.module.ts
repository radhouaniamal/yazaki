import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { PagesLoginComponent } from './pages/pages-login/pages-login.component';
import { PagesRegisterComponent } from './pages/pages-register/pages-register.component';
import { HasRoleGuard } from './services/hasRole.guard';
import { IsAuthenticatedGuard } from './services/is-authenticated.guard';
import { PagesBlankComponent } from './pages/pages-blank/pages-blank.component';
import { UsersProfileComponent } from './pages/users-profile/users-profile.component';
import { AdminComponent } from './layouts/AdminLayout/admin/admin.component';
import { UserComponent } from './layouts/AdminLayout/user/user.component';

const routes: Routes = [
  {
    path: 'admin', component: AdminComponent,
    children: [
      { path: '', component: DashboardComponent, },

    ]
  },

  

  { path: 'pages-401', component: PagesBlankComponent },
  { path: 'login', component: PagesLoginComponent },
  { path: 'signup', component: PagesRegisterComponent }





];

@NgModule({
  imports: [RouterModule.forRoot(routes,)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
