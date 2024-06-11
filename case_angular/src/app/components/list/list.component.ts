import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { items } from '../itemsmodel';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  data: undefined | items[]

  constructor(private api: ApiService) {}
  ngOnInit(): void {
    this.getItems();
  }

  getItems() {
    this.api.getItems().subscribe(res => {
      this.data = res;
    })
  }

  delete(id: number) {
    const confirmDelete = confirm("Tem certeza que deseja excluir este item?");
    if (confirmDelete) {
      this.api.deleteItem(id).subscribe(res => {
        alert("Item deletado com sucesso!!!!");
        this.getItems();
      });
    }
  }
  
  logout() {
    localStorage.removeItem("loginData")
  }
  
}
