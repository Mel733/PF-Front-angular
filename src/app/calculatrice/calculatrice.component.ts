import {Component, OnInit,ChangeDetectionStrategy} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';



@Component({
  selector: 'app-calculatrice',
  imports: [MatButtonModule,MatIconModule,MatDividerModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './calculatrice.component.html',
  standalone: true,
  styleUrl: './calculatrice.component.css'
})
export class CalculatriceComponent implements OnInit {
  value1: number = 0;
  value2: number = 0;
  result: number = 0;
  errorMessage: string ='';

  constructor() {
  }

  ngOnInit() {
  }

  addNumbers() {
    this.errorMessage=''
    this.result = this.value1 + this.value2
  }

  subtractNumbers() {
    this.errorMessage=''
    this.result = this.value1 - this.value2
  }

  multiplyNumbers() {
    this.errorMessage=''
    this.result = this.value1 * this.value2
  }

  divideNumbers() {
    this.errorMessage=''
    if (this.value2 === 0) {
      this.errorMessage ='Attention division par 0 impossible'
      return;
    }
    this.result = this.value1 / this.value2
  }

  changeValue1($event: any) {
    console.log($event);
    console.log($event.target)
    this.value1 = Number($event.target.value);
  }


  changeValue2($event: any) {
    this.value2 = Number($event.target.value);
  }
}
