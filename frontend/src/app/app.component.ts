import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'frontend';

  private isDark = true;

  @HostBinding('class')
  get themeMode() {
    return this.isDark ? 'dark-theme' : 'light-theme';
  }

  switchDarkMode(isDarkMode: boolean) {
    this.isDark = isDarkMode;
  }
}
