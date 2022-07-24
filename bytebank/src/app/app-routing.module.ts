import { NgModule } from "@angular/core";
import { Router, RouterModule, Routes } from "@angular/router";
import { ExtratoComponent } from "./extrato/extrato.component";
import { NovaTransferencia } from "./nova-transferencia/nova-transferencia.component";

export const routes: Routes = [
  { path:'', redirectTo: 'extrato', pathMatch:'full'},
  { path:'extrato', component: ExtratoComponent },
  { path: 'nova-transferencia', component: NovaTransferencia}

]

@NgModule({
  imports:[RouterModule.forRoot(routes)],
  exports:[RouterModule]
})

export class AppRoutionModule {

};
