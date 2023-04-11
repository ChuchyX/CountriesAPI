import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  theme = true;

  ngOnInit(): void {
    if (localStorage.getItem('theme') === 'dark') this.theme = true;
    if (localStorage.getItem('theme') === 'light') this.theme = false;
    if (this.theme) {
      document.documentElement.setAttribute('theme', 'dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.setAttribute('theme', 'light');
      localStorage.setItem('theme', 'light');
    }
  }

  changeTheme() {
    this.theme = !this.theme;
    if (localStorage.getItem('theme') === 'dark')
      localStorage.setItem('theme', 'light');
    else localStorage.setItem('theme', 'dark');
    this.ngOnInit();
  }
}
