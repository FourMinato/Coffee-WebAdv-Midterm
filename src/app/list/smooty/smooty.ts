import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { Coffee } from '../../services/coffee.service';
import coffeeData from '../../../assets/data.json'; // ดึงข้อมูล JSON ตรง ๆ

@Component({
  selector: 'app-smooty',
  imports: [MatIcon],
  templateUrl: './smooty.html',
  styleUrl: './smooty.scss'
})
export class Smooty implements OnInit {

  SmootyCoffee: any[] = [];

  constructor(private router: Router, private location: Location) { }

  ngOnInit(): void {
    // กรองเอาเฉพาะเมนูร้อน TypeNo = 1
    this.SmootyCoffee = coffeeData.Coffee.filter(c => c.TypeProduct.TypeNo === 3);
  }

  goBack(): void {
    this.location.back();
  }

  logout() {
    localStorage.removeItem('currentUser');
    window.location.replace('/login');
  }

  addToCart(coffee: Coffee) {
    console.log('เพิ่มลงตะกร้า:', coffee);
    // เขียนโค้ดเพิ่มลงตะกร้าได้ตรงนี้
  }
}
