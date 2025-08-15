import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { Router, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-type',
  imports: [CommonModule, MatIcon],
  templateUrl: './type.html',
  styleUrl: './type.scss'
})
export class Type {

  constructor(private router: Router) { }
  hot() {
    this.router.navigate(['list/hot']);
  }
  cool() {
    this.router.navigate(['list/cool']);
  }
  smooty() {
    this.router.navigate(['list/smooty']);
  }
  logout() {
    localStorage.removeItem('currentUser');

    // ล้าง history และไปหน้า login
    this.router.navigate(['/login'], { replaceUrl: true });

    // ป้องกันการกดย้อนกลับ
    history.pushState(null, '', location.href);
    window.onpopstate = () => {
      history.go(1);
    };
  }
}
