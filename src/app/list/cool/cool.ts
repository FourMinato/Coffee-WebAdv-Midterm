import { Component, OnInit } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { Router } from '@angular/router';
import { CommonModule, Location } from '@angular/common';
import { Coffee } from '../../services/coffee.service';
import coffeeData from '../../../assets/data.json'; // ดึงข้อมูล JSON ตรง ๆ

@Component({
  selector: 'app-cool',
  imports: [CommonModule, MatIcon],
  templateUrl: './cool.html',
  styleUrl: './cool.scss'
})
export class Cool implements OnInit {

  CoolCoffee: any[] = [];

  constructor(private router: Router, private location: Location) { }

  ngOnInit(): void {
    // ถ้าไม่มี currentUser ให้ redirect ไปหน้า login ทันที
    if (!localStorage.getItem('currentUser')) {
      window.location.replace('/login');
      return;
    }
    // กรองเอาเฉพาะเมนูร้อน TypeNo = 1
    this.CoolCoffee = coffeeData.Coffee.filter(c => c.TypeProduct.TypeNo === 2);
  }

  goBack(): void {
    this.location.back();
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

  addToCart(coffee: Coffee) {
    console.log('เพิ่มลงตะกร้า:', coffee);
    // เขียนโค้ดเพิ่มลงตะกร้าได้ตรงนี้
  }
}