import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { AboutComponent } from './components/pages/about/about.component';
import { FeaturesComponent } from './components/pages/features/features.component';
import { ServicesComponent } from './components/pages/services/services/services.component';
import { ServiceDetailsComponent } from './components/pages/services/service-details/service-details.component';
import { ContactComponent } from './components/pages/contact/contact.component';
import { FaqComponent } from './components/pages/faq/faq.component';
import { NotFoundComponent } from './components/pages/not-found/not-found.component';
import {CitizenshipComponent} from './components/pages/citizenship/citizenship.component';

const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'about', component: AboutComponent},
    {path: 'features', component: FeaturesComponent},
    {path: 'services', component: ServicesComponent},
    {path: 'service-details', component: ServiceDetailsComponent},
    {path: 'faq', component: FaqComponent},
    {path: 'contact', component: ContactComponent},
    {path: 'citizenship/saint-kitts', component: CitizenshipComponent},
    {path: '**', component: NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
