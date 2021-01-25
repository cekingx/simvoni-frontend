import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SuperAdminModule } from "./super-admin/super-admin.module";
import { LoadingComponent } from './loading/loading.component';
import { ToggleLoadingComponent } from './toggle-loading/toggle-loading.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LoadingComponent,
    ToggleLoadingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    SuperAdminModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
