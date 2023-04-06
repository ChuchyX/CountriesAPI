import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  theme = true;

  ngOnInit(): void {
    if(this.theme)
    {
      document.documentElement.setAttribute("theme", "dark");
    }
    else
    {
      document.documentElement.setAttribute("theme", "light");
    }
  }

  changeTheme()
  {
    this.theme = !this.theme;
    this.ngOnInit();
  }

}
