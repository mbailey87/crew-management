import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatButtonModule, CommonModule, FormsModule],
  template:'<h1>App Component</h1>',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'crew-management';

  ngOnInit(): void {}
  ngdestroy(): void {}
}
