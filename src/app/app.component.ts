import { Component } from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import {CalculatriceComponent} from './calculatrice/calculatrice.component';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CalculatriceComponent, RouterLink,MatSidenavModule,MatButtonModule,MatMenuModule, MatIconModule],
  templateUrl: './app.component.html',
 standalone: true,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'calculatrice2';
}
