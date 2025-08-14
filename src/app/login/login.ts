import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIcon } from '@angular/material/icon';
import { MatInput } from '@angular/material/input';
import { Router } from '@angular/router';
import usersData from '../../assets/data.json';

@Component({
  selector: 'app-login',
  imports: [FormsModule, CommonModule, MatFormFieldModule, MatInput, MatIcon],
  templateUrl: './login.html',
  styleUrl: './login.scss'
})
export class Login {
  email: string = '';
  password: string = '';

  constructor(private router: Router) { }

  login() {
    const emails = usersData.Users.find(u =>
      u.Email === this.email && u.Password === this.password
    );

    if (emails) {
      // เก็บข้อมูลผู้ใช้
      localStorage.setItem('currentUser', JSON.stringify(emails));

      // ไปหน้า home
      this.router.navigate(['/type']);
    } else {
      alert('ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง');
    }
  }

}