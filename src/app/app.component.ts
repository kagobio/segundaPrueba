import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListEmpleadosComponent } from './list-empleados/list-empleados.component';
import { FormEmpleadosComponent } from './form-empleados/form-empleados.component';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `<app-list-empleados></app-list-empleados
    ><app-form-empleados></app-form-empleados>`,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [RouterOutlet, ListEmpleadosComponent, FormEmpleadosComponent],
})
export class AppComponent {
  title = 'segundaPrueba';
}
