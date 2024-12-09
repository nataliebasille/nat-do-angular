import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { from } from 'rxjs';
import { AsyncPipe, JsonPipe } from '@angular/common';
import { TRPC } from './trpc/trpc.injection';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AsyncPipe, JsonPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'nat-do-angular';

  data = from(inject(TRPC).users.query());
}
