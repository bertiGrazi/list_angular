import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { items } from './components/itemsmodel';
@Injectable({
providedIn: 'root'
})

export class ApiService {
  constructor(private http: HttpClient) {}

  addItem(data: items) {
    return this.http.post<items>("http://localhost:3000/items", data)
  }

  getItems() {
    return this.http.get<items[]>("http://localhost:3000/items")
  }

  deleteItem(id: number) {
    return this.http.delete<items>("http://localhost:3000/items"+id)
  }
}