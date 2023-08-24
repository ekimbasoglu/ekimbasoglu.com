import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { MyProjectsComponent } from './my-projects/my-projects.component';
import { AboutComponent } from './about/about.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { ReadMoreComponent } from './read-more/read-more.component';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { environment } from '../environments/environment';
import { CountComponent } from './count/count.component';
import { CountresetComponent } from './countreset/countreset.component';
import { JourneyComponent } from './journey/journey.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    MyProjectsComponent,
    AboutComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    ReadMoreComponent,
    CountComponent,
    CountresetComponent,
    JourneyComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
  ],
  providers: [],
  bootstrap: [AppComponent, HeaderComponent],
  exports: [HeaderComponent, FooterComponent],
})
export class AppModule {}
