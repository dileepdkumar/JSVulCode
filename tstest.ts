// app.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div>
      <h2>Enter some text:</h2>
      <input type="text" (input)="updateUserInput($event.target.value)" placeholder="Type something...">
    </div>
    <div>
      <h3>Your Input:</h3>
      <div [innerHTML]="userInput"></div> <!-- Sink: XSS vulnerability here -->
    </div>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userInput: string = ''; // Source: user input is stored here

  updateUserInput(input: string): void {
    this.userInput = input;
  }
}
