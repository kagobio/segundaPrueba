import { Component } from '@angular/core';
import { Empleado } from '../empleado';
import { EmpleadoService } from '../empleados.service';
import { FormsModule } from '@angular/forms';
import { NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-form-empleados',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './form-empleados.component.html',
  styleUrls: ['./form-empleados.component.css'],
})
export class FormEmpleadosComponent {
  empleado = new Empleado(0, '', '', '', '');
  formInvalid = false;

  constructor(private empleadoService: EmpleadoService) {}

  onSubmit(form: NgForm) {
    if (form.valid) {
      let telefono = this.empleado.telefono;
      if (!telefono.startsWith('+52')) {
        telefono = '+52' + telefono;
      }

      const nuevoEmpleado = new Empleado(
        this.empleado.id,
        this.empleado.nombre,
        this.empleado.apellido,
        this.empleado.puesto,
        telefono,
        this.empleado.remoto
      );
      this.empleadoService.addEmpleado(nuevoEmpleado);
      this.empleado = new Empleado(0, '', '', '', '');
      this.formInvalid = false;
    } else {
      this.formInvalid = true;
    }
  }
}
