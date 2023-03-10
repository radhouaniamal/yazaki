import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layouts/header/header.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { SidebarComponent } from './layouts/sidebar/sidebar.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { UsersProfileComponent } from './pages/users-profile/users-profile.component';
import { PagesFaqComponent } from './pages/pages-faq/pages-faq.component';
import { PagesContactComponent } from './pages/pages-contact/pages-contact.component';
import { PagesRegisterComponent } from './pages/pages-register/pages-register.component';
import { PagesLoginComponent } from './pages/pages-login/pages-login.component';
import { PagesError404Component } from './pages/pages-error404/pages-error404.component';
import { PagesBlankComponent } from './pages/pages-blank/pages-blank.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { IsAuthenticatedGuard } from './services/is-authenticated.guard';
import { HasRoleGuard } from './services/hasRole.guard';
import { FormsModule } from '@angular/forms';
import { AdminComponent } from './layouts/AdminLayout/admin/admin.component';
import { UserComponent } from './layouts/AdminLayout/user/user.component';
import { MatComponent } from './components/mat/mat.component';
import { AmalComponent } from './component/amal/amal.component';
import { CommandeComponent } from './componentt/commande/commande.component';
import { ScrapesComponent } from './componentts/scrapes/scrapes.component';


 
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    DashboardComponent,
    UsersProfileComponent,
    PagesFaqComponent,
    PagesContactComponent,
    PagesRegisterComponent,
    PagesLoginComponent,
    PagesError404Component,
    PagesBlankComponent,
    AdminComponent,
    UserComponent,
    MatComponent,
    AmalComponent,
    CommandeComponent,
    ScrapesComponent,

   
   
    
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
