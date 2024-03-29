import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AlertComponent } from "./alert/alert.component";
import { DropdownDirective } from "./dropdown.directive";
import { LoadingSpinnerComponent } from "./loading-spinner/loading-spinner.component";
import { PlaceholderDirective } from "./placeholder/placeholder.directive";

@NgModule({
    imports: [
        CommonModule, ReactiveFormsModule, FormsModule
    ],
    declarations: [
        DropdownDirective,
        AlertComponent,
        LoadingSpinnerComponent,
        PlaceholderDirective
    ],
    exports: [
        DropdownDirective,
        AlertComponent,
        LoadingSpinnerComponent,
        PlaceholderDirective,
        CommonModule
    ]
})

export class SharedModule {}