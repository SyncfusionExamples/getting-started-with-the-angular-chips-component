import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ChipListModule, ClickEventArgs } from '@syncfusion/ej2-angular-buttons';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ChipListModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'example';
  public chipText: string = "";
  chipClick(e: ClickEventArgs)
  {
    if(e.text)
    {
      this.chipText = "You have clicked " + e.text;
    }
  }
}
