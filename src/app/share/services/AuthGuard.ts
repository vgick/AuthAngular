import {Injectable} from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import {Observable} from 'rxjs';
import {AuthService} from './auth.service';

/**
 * Гуард авторизации.
 */
@Injectable({providedIn: 'root'})
export class AuthGuard implements CanActivate{
  /**
   * Кнструктор.
   * @param authService Сервис авторизации.
   * @param router Навигация.
   */
  constructor(private authService: AuthService, private router: Router) { }

  /**
   * Реализация метода гуарда.
   */
  canActivate(): Observable<boolean> | Promise<boolean > | boolean {
    if (this.authService.isAuthenticated) {return true; }
    else {
      this.router.navigate(['login']);
      return false; }
  }
}
