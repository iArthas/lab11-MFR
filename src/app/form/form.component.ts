import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

declare var bootstrap: any; // Declarar Bootstrap globalmente

@Component({
  standalone: true,
  selector: 'app-custom-form',
  imports: [FormsModule, CommonModule],
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  field1: string = '';
  field2: string = '';
  field3: string = '';
  field4: string = '';
  termsAccepted: boolean = false;
  loading: boolean = false;

  onSubmit() {
    if (!this.termsAccepted) {
      alert('Debe aceptar los términos y condiciones.');
      return;
    }

    // Mostrar los datos en la consola
    console.log('Datos agregados al Formulario de Contacto')
    console.log('Nombre:', this.field1);
    console.log('Correo:', this.field2);
    console.log('Celular:', this.field3);
    console.log('Link de GitHub:', this.field4);

    this.loading = true;
    // Mostrar el modal de carga
    const loadingModal = new bootstrap.Modal(document.getElementById('loadingModal')!);
    loadingModal.show();

    setTimeout(() => {
      this.loading = false;
      loadingModal.hide();
      // Mostrar el modal de confirmación
      const confirmationModal = new bootstrap.Modal(document.getElementById('confirmationModal')!);
      confirmationModal.show();
    }, 10000);
  }

  closeConfirmationModal() {
    const confirmationModal = bootstrap.Modal.getInstance(document.getElementById('confirmationModal')!);
    if (confirmationModal) {
      confirmationModal.hide();
    }
  }
}
