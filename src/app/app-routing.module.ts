import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DashboardComponent} from "./components/dashboard/dashboard.component";
import {NotFoundComponent} from "./components/not-found/not-found.component";
import {CentroAmericaComponent} from "./components/centro-america/centro-america.component";
import {GuatemalaComponent} from "./components/guatemala/guatemala.component";
import {ElSalvadorComponent} from "./components/el-salvador/el-salvador.component";
import {HondurasComponent} from "./components/honduras/honduras.component";
import {NicaraguaComponent} from "./components/nicaragua/nicaragua.component";
import {PanamaComponent} from "./components/panama/panama.component";
import {CostaRicaComponent} from "./components/costa-rica/costa-rica.component";

const routes: Routes = [
  {path: '', component: DashboardComponent},
  {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'centroAmerica', component: CentroAmericaComponent},
  {path: 'gt', component: GuatemalaComponent},
  {path: 'sv', component: ElSalvadorComponent},
  {path: 'hd', component: HondurasComponent},
  {path: 'nc', component: NicaraguaComponent},
  {path: 'cs', component: CostaRicaComponent},
  {path: 'pn', component: PanamaComponent},
  {path: '**', component: NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
