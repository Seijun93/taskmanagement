import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TaskmanagerComponent } from './taskmanager/taskmanager.component';

@Component({
    selector: 'app-root',
    imports: [RouterOutlet, TaskmanagerComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'taskmanagement';
}
