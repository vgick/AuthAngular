import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient, HttpParams} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import {tap} from 'rxjs/operators';

/**
 * Данные для авторизации.
 */
export interface IAuthUser {
  /**
   * Логин пользователя.
   */
  login: string;

  /**
   * Пароль пользователя.
   */
  password: string;
}

/**
 * Ответ сервиса авторизации.
 */
export interface IAuthResult {
  CheckLoginResult: string;
}

@Injectable({providedIn: 'root'})
export class AuthService {
  /**
   * Конструктор.
   * @param httpClient HTTP клиент.
   */
  constructor(private httpClient: HttpClient) {
    this.userName.next(localStorage.getItem('user-name'));
  }

  /**
   * Адрес сервиса авторизации.
   */
  url = environment.authURL;

  /**
   * Имя пользователя (не логин).
   */
  userName: BehaviorSubject<string>  = new BehaviorSubject<string>(undefined);

  /**
   * Авторизоваться.
   * @param user Данные для авторизации.
   */
  login(user: IAuthUser): Observable<IAuthResult> {
    let params  = new HttpParams().set('login', user.login);
    params      = params.append('password', user.password);

    return this.httpClient.
      get<IAuthResult>(this.url, {params}).
      pipe(
        tap((userName) => {
          this.userName.next(userName.CheckLoginResult);
          localStorage.setItem('user-name', userName.CheckLoginResult);
        })
    );
  }

  /**
   * Выйти из системы.
   */
  logout(): void {
    this.userName.next(undefined);
    localStorage.clear();
  }

  /**
   * Авторизован ли пользователь в системе.
   */
  get isAuthenticated(): boolean {
    return !!this.userName.getValue();
  }
}
