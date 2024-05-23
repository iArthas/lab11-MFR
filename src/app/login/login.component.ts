import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-login',
  imports: [FormsModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private router: Router) {}

  onSubmit() {
    // Verifica si se han ingresado valores para el nombre de usuario y la contraseña
    if (this.username.trim() === '' || this.password.trim() === '') {
      alert('Por favor, ingresa un nombre de usuario y una contraseña.');
      return;
    }

    // Lógica para manejar el inicio de sesión
    console.log('LOGIN');
    console.log('Nombre:', this.username);
    console.log('Contraseña:', this.password);

    // Redirige al usuario a la página de formulario
    this.router.navigate(['/form']);
  }

  onRegister() {
    // Redirige al usuario a la página de registro
    this.router.navigate(['/register']);
  }
}
