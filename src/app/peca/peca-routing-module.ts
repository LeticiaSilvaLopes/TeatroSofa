import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { Peca } from './peca/peca';
import { PecaList } from "./peca-list/peca-list";
import { PecaEdit } from "./peca-edit/peca-edit";

const routes: Routes = [
    { path: '', component: Peca },
    { path: 'create', component: PecaEdit},
    { path: 'edit/:id', component: PecaEdit}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PecaRoutingModule {

}