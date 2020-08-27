import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatCarouselModule} from '@ngmodule/material-carousel'
import { MatSliderModule } from '@angular/material/slider';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { AboutComponent } from './shared/about/about.component';
import { SamplefunComponent } from './shared/samplefun/samplefun.component';
import { DataapiComponent } from './shared/dataapi/dataapi.component';
import { HomeComponent } from './shared/home/home.component';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';
import { SimpleformComponent } from './shared/simpleform/simpleform.component';
import { TdfComponent } from './shared/tdf/tdf.component';
import { DataTableComponent } from './shared/data-table/data-table.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutComponent,
    SamplefunComponent,
    DataapiComponent,
    HomeComponent,
    PageNotFoundComponent,
    SimpleformComponent,
    TdfComponent,
    DataTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatIconModule,
    MatCarouselModule.forRoot(),
    MatSliderModule,
    FormsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
