import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import {MatIconModule} from "@angular/material/icon";
import {MatToolbarModule} from '@angular/material/toolbar';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatButtonModule} from "@angular/material/button";
import {MatDividerModule} from "@angular/material/divider";
import {MatCardModule} from "@angular/material/card";
import {HttpClientModule} from "@angular/common/http";
import {MatExpansionModule} from "@angular/material/expansion";
import { CentroAmericaComponent } from './components/centro-america/centro-america.component';
import {MatSelectModule} from "@angular/material/select";
import {FormsModule} from "@angular/forms";
import {MatDialogModule} from "@angular/material/dialog";
import {MatDatepickerModule} from "@angular/material/datepicker";
import { GuatemalaComponent } from './components/guatemala/guatemala.component';
import { ElSalvadorComponent } from './components/el-salvador/el-salvador.component';
import { HondurasComponent } from './components/honduras/honduras.component';
import { NicaraguaComponent } from './components/nicaragua/nicaragua.component';
import { PanamaComponent } from './components/panama/panama.component';
import { CostaRicaComponent } from './components/costa-rica/costa-rica.component';




@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    NotFoundComponent,
    NavbarComponent,
    CentroAmericaComponent,
    GuatemalaComponent,
    ElSalvadorComponent,
    HondurasComponent,
    NicaraguaComponent,
    PanamaComponent,
    CostaRicaComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    MatCardModule,
    MatExpansionModule,
    SweetAlert2Module.forRoot(),
    SweetAlert2Module,
    SweetAlert2Module.forChild({ /* options */}),
    MatSelectModule,
    FormsModule,
    MatDialogModule,
    MatDatepickerModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
