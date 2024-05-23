import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-register',
  imports: [FormsModule, RouterModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  username: string = '';
  email: string = '';
  password: string = '';

  constructor(private router: Router) {}

  onSubmit() {

    // Verifica si se han ingresado valores para el nombre de usuario, correo electrónico y contraseña
    if (this.username.trim() === '' || this.email.trim() === '' || this.password.trim() === '') {
      alert('Por favor, ingresa un nombre de usuario, correo electrónico y contraseña.');
      return;
    }
    
    // Lógica para manejar el registro
    console.log('USUARIO-REGISTRADO');
    console.log('Usuario:', this.username);
    console.log('Email:', this.email);
    console.log('Contraseña:', this.password);

    this.router.navigate(['/home']);
  }

  onCancel() {
    // Redirigir a la página de inicio de sesión
    this.router.navigate(['/home']);
  }
}
