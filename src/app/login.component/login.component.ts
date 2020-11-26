import {Component, OnInit} from '@angular/core';
import {AuthService} from '../share/services/auth.service';
import {Router} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';

/**
 * Компонент авторизации.
 */
@Component({
  selector: 'app-login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.css']
})
export class LoginComponent implements OnInit {
  /**
   * Консруктор.
   * @param authService Сервис авторизации.
   * @param router Навигация.
   */
  constructor(private authService: AuthService, private router: Router) { }

  /**
   * Форма.
   */
  public form: FormGroup;

  /**
   * Имя пользователя.
   */
  public userLogin = undefined;

  /**
   * Пароль пользователя.
   */
  public userPassword = undefined;

  /**
   * Попыток ввода пароля не осуществляось.
   */
  public firstAttempt = true;

  ngOnInit(): void {
    this.form = new FormGroup({
      login: new FormControl(undefined, [Validators.required]),
      password: new FormControl(undefined, [Validators.required])
    });
  }

  /**
   * Авторизоваться в системе.
   */
  login(): void {
    if (this.form.invalid) { return; }

    this.authService.
      login({login: this.userLogin, password: this.userPassword}).
      subscribe((userName) => {
      if (userName !== undefined) { this.router.navigate(['/']); }
      this.firstAttempt = false;
    });
  }
}
