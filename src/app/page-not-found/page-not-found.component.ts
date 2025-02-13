import { Component } from '@angular/core';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatButtonModule} from '@angular/material/button';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-page-not-found',
  imports: [MatProgressSpinnerModule,MatButtonModule,MatProgressBarModule,MatCardModule],
  templateUrl: './page-not-found.component.html',
  standalone: true,
  styleUrl: './page-not-found.component.css'
})
export class PageNotFoundComponent {

  protected readonly onclick = onclick;
}
