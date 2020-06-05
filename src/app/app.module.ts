import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PreloaderComponent } from './components/layout/preloader/preloader.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { HomeComponent } from './components/pages/home/home.component';
import { FunfactComponent } from './components/common/funfact/funfact.component';
import { FeedbackComponent } from './components/common/feedback/feedback.component';
import { SubscribeComponent } from './components/common/subscribe/subscribe.component';
import { AboutComponent } from './components/pages/about/about.component';
import { FeaturesComponent } from './components/pages/features/features.component';
import { ServicesComponent } from './components/pages/services/services/services.component';
import { ServiceDetailsComponent } from './components/pages/services/service-details/service-details.component';
import { ContactComponent } from './components/pages/contact/contact.component';
import { FaqComponent } from './components/pages/faq/faq.component';
import {CitizenshipComponent} from './components/pages/citizenship/citizenship.component';
import { NotFoundComponent } from './components/pages/not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    PreloaderComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    FunfactComponent,
    FeedbackComponent,
    SubscribeComponent,
    AboutComponent,
    FeaturesComponent,
    ServicesComponent,
    ServiceDetailsComponent,
    ContactComponent,
    FaqComponent,
    NotFoundComponent,
    CitizenshipComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
