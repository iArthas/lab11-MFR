import { Routes } from '@angular/router';
// Importa los componentes necesarios
import { LoginComponent } from './login/login.component';
import { FormComponent } from './form/form.component'; // Asume que FormComponent está en./form/form.component
import { RegisterComponent } from './register/register.component'; // Asume que RegisterComponent está en./register/register.component

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: LoginComponent
    },
    {
        path: 'form',
        component: FormComponent // Añade la ruta para FormComponent
    },
    {
        path: 'register',
        component: RegisterComponent // Añade la ruta para RegisterComponent
    },
];
