import { CanActivateFn } from '@angular/router';
import { inject } from '@angular/core';
import { Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router); // Inyectamos el Router
  const token = localStorage.getItem('access_token'); // Intentamos obtener el token del localStorage

  console.log('Checking token in localStorage:', token); // Añadimos un console.log para ver si el token existe

  // Si no hay token, redirige al login
  if (!token) {
    console.log('No token found. Redirecting to login...');
    router.navigate(['/login']);
    return false;
  }

  // Si hay token, permite el acceso a la ruta protegida
  return true;
};
