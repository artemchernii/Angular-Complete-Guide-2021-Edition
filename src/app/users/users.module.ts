import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { SharedModule } from "../shared/shared.module";
import { TestComponent } from "./testcomp.component";
import { TestTwoComponent } from "./testtwo.component";
import { UsersRoutingMogule } from "./users-routing.module";
import { UsersComponent } from "./users.component";

@NgModule({
    declarations: [
        UsersComponent,
        TestComponent,
        TestTwoComponent
    ],
    imports: [
        RouterModule, SharedModule, UsersRoutingMogule, FormsModule
    ],
    exports: [
        UsersComponent,
        TestComponent,
        TestTwoComponent
    ]
})

export class UsersModule {}
