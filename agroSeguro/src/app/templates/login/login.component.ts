import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  isLoggedIn: boolean = false; // Variable para controlar si el usuario está logueado
  userName: string | null = null; // Para mostrar el nombre del usuario si está logueado

  // Asume que tu cookie de login se llama 'token' o 'isLoggedIn'
  private readonly LOGIN_COOKIE_NAME = 'token'; // O el nombre real de tu cookie

  constructor(
    private cookieService: CookieService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.checkLoginStatus();
    // Puedes también escuchar cambios si la cookie puede cambiar sin recargar la página
    // this.cookieService.get(this.LOGIN_COOKIE_NAME).subscribe(...)
  }

  checkLoginStatus(): void {
    // Verifica si la cookie existe
    this.isLoggedIn = this.cookieService.check(this.LOGIN_COOKIE_NAME);

    if (this.isLoggedIn) {
      // Si la cookie existe, puedes intentar obtener un valor (ej. nombre de usuario) si lo almacenas
      // Por ejemplo, si tu cookie almacena un JWT o un JSON con el nombre de usuario
      const cookieValue = this.cookieService.get(this.LOGIN_COOKIE_NAME);
      // Aquí, parsearías el valor de la cookie si es un JSON o JWT para obtener el nombre de usuario.
      // Por simplicidad, asumiremos que si la cookie existe, el usuario está logueado.
      // Si la cookie contiene un JWT, necesitarías decodificarlo para obtener el payload.
      // Ejemplo (pseudocódigo para JWT):
      // const decodedToken = jwt_decode(cookieValue); // Necesitarías una librería como jwt-decode
      // this.userName = decodedToken.username;

      // Para un ejemplo simple, solo decimos "Usuario"
      this.userName = 'Usuario';
    } else {
      this.userName = null;
    }
  }

}
