import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import coffeeData from '../../../assets/data.json'; // ดึงข้อมูล JSON ตรง ๆ
import { MatIcon } from '@angular/material/icon';
import { Coffee } from '../../services/coffee.service';

@Component({
  selector: 'app-hot',
  standalone: true,
  imports: [CommonModule, MatIcon],
  templateUrl: './hot.html',
  styleUrl: './hot.scss'
})
export class Hot implements OnInit {

  hotCoffees: any[] = [];

  constructor(
    private router: Router,
    private location: Location
  ) { }

  ngOnInit(): void {
    // กรองเอาเฉพาะเมนูร้อน TypeNo = 1
    this.hotCoffees = coffeeData.Coffee.filter(c => c.TypeProduct.TypeNo === 1);
  }

  goBack(): void {
    this.location.back();
  }

  logout() {
    localStorage.removeItem('currentUser');
    window.location.replace('/');
  }

  addToCart(coffee: Coffee) {
    console.log('เพิ่มลงตะกร้า:', coffee);
    // เขียนโค้ดเพิ่มลงตะกร้าได้ตรงนี้
  }
}
