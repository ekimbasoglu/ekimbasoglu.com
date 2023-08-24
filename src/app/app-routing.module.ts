import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MyProjectsComponent } from './my-projects/my-projects.component';
import { CountComponent } from './count/count.component';
import { CountresetComponent } from './countreset/countreset.component';
import { JourneyComponent } from './journey/journey.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'my-projects', component: MyProjectsComponent },
  { path: 'journey', component: JourneyComponent },
  { path: 'count', component: CountComponent },
  { path: 'count/reset', component: CountresetComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
