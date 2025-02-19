import { Routes } from '@angular/router';
import { TemplateDrivenComponent } from './template-driven/template-driven.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { ReactiveFormValidationComponent } from './reactive-form-validation/reactive-form-validation.component';

export const routes: Routes = [
    {path:'', component:TemplateDrivenComponent},
    {path:'reactiveform', component:ReactiveFormComponent},
    {path:'reactiveformvalidation', component:ReactiveFormValidationComponent}
];
