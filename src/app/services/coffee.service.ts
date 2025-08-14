import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface TypeProduct {
  TypeNo: number;
  TypeName: string;
  Image: string;
}

export interface Coffee {
  ProductNo: number;
  ProductName: string;
  TypeProduct: TypeProduct;
  Description: string;
  Image: string;
}

export interface CoffeeData {
  Users: any[];
  Coffee: Coffee[];
}

@Injectable({
  providedIn: 'root'
})
export class CoffeeService {
  private dataUrl = 'assets/data.json'; 

  constructor(private http: HttpClient) { }

  // ดึงข้อมูลทั้งหมด
  getAllCoffee(): Observable<Coffee[]> {
    return this.http.get<CoffeeData>(this.dataUrl).pipe(
      map(data => data.Coffee)
    );
  }

  // ดึงเมนูร้อน (TypeNo: 1)
  getHotCoffee(): Observable<Coffee[]> {
    return this.getAllCoffee().pipe(
      map(coffees => coffees.filter(coffee => coffee.TypeProduct.TypeNo === 1))
    );
  }

  // ดึงเมนูเย็น (TypeNo: 2)
  getCoolCoffee(): Observable<Coffee[]> {
    return this.getAllCoffee().pipe(
      map(coffees => coffees.filter(coffee => coffee.TypeProduct.TypeNo === 2))
    );
  }

  // ดึงเมนูปั่น (TypeNo: 3)
  getSmoothyCoffee(): Observable<Coffee[]> {
    return this.getAllCoffee().pipe(
      map(coffees => coffees.filter(coffee => coffee.TypeProduct.TypeNo === 3))
    );
  }
}