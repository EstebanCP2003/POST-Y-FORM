import { Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';
import { PublicacionesComponent } from './pages/publicaciones/publicaciones.component';
import { FormComponent } from './pages/form/form.component';

export const routes: Routes = [
    { path: 'about', component: AboutComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'home', component: HomeComponent },
    { path: 'posts', component: PublicacionesComponent},
    { path: 'form', component: FormComponent},
    { path: '**', redirectTo: 'home' } //redirige a una página que no esté en la App

    // Como cargar páginas con LeysiLoad --> Para la próxima clases
];
