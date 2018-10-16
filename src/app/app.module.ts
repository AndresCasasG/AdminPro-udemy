import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

//Routes
import { APP_ROUTING } from './app.routes';

//Modules
import { PagesModule } from './pages/pages.module';
import { FormsModule } from '@angular/forms';

//Services
import { ServiceModule } from './services/service.module';

//Components
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    PagesModule,
    ServiceModule,
    FormsModule,
    APP_ROUTING
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
