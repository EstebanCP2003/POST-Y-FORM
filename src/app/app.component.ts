import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AboutComponent} from './pages/about/about.component';
import { ContactComponent } from "./pages/contact/contact.component";
import { HomeComponent } from './pages/home/home.component';
import { MenuComponent } from "./components/menu/menu.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ RouterOutlet, AboutComponent, ContactComponent, HomeComponent, MenuComponent ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Angular_Rutas';
}
