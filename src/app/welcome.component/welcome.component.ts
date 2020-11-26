import {Component, OnInit} from '@angular/core';
import {AuthService} from '../share/services/auth.service';
import {BehaviorSubject} from 'rxjs';
import {Router} from '@angular/router';

/**
 * Компонент приветствия авторизованного пользователя.
 */
@Component({
  selector: 'app-welcome',
  templateUrl: 'welcome.component.html',
  styleUrls: ['welcome.component.css']
})
export class WelcomeComponent implements OnInit{
  /**
   * Конструтор.
   * @param authService Сервис авторизации.
   * @param router Навигация.
   */
  constructor(private authService: AuthService, private router: Router) { }

  /**
   * Имя авторизованного пользователя.
   */
  public userName: BehaviorSubject<string>;

  /**
   * Инициализация компонента.
   */
  ngOnInit(): void {
    this.userName = this.authService.userName;
  }

  /**
   * Выйти из системы.
   */
  logoff(): void {
    this.authService.logout();
    this.router.navigate(['login']);
  }
}
