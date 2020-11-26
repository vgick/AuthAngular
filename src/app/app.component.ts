import {Component, OnInit} from '@angular/core';
import {AuthService} from './share/services/auth.service';
import {BehaviorSubject} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  /**
   * Конструктор.
   * @param authService Сервис авторизации.
   */
  constructor(private authService: AuthService) { }

  /**
   * Если пользователь авторизован, то его имя.
   */
  userName: BehaviorSubject<string>;

  /**
   * Инициализация компонента.
   */
  ngOnInit(): void {
    this.userName = this.authService.userName;
  }
}
