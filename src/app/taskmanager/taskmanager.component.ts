import { Component } from '@angular/core';
import { NavigationComponent } from "./navigation/navigation.component";
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-taskmanager',
  imports: [
    NavigationComponent,
    HeaderComponent,
    FooterComponent
  ],
  templateUrl: './taskmanager.component.html',
  styleUrl: './taskmanager.component.css'
})
export class TaskmanagerComponent {

}
