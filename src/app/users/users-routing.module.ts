import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "../auth/auth.guard";
import { TestComponent } from "./testcomp.component";
import { TestTwoComponent } from "./testtwo.component";
import { UsersComponent } from "./users.component";

const routes: Routes = [
    {
        path: '',
        canActivate: [AuthGuard],
        component: UsersComponent,
        children: [
            { path: 'testcomp', component: TestComponent },
            { path: 'testtwo', component: TestTwoComponent }
        ]
    }
];


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class UsersRoutingMogule {}