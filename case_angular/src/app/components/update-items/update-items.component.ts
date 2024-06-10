import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router} from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { items } from '../itemsmodel';

@Component({
  selector: 'app-update-items',
  templateUrl: './update-items.component.html',
  styleUrls: ['./update-items.component.css']
})
export class UpdateItemsComponent implements OnInit {
  public itemId!: number
  public itemData: items = {} as items

  constructor(private api: ApiService, private activatedRoute: ActivatedRoute, private route: Router) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((param: Params) => {
      this.itemId = param['id']
    })
    this.api.fetchItems(this.itemId).subscribe((data: items) => {
      this.itemData = data
      console.log(data)
    })
  }

  updateItems() {
    this.api.updateItems(this.itemData, this.itemId).subscribe((res: items) => {
      alert("Item ou itens editados com sucesso!!!")
      this.route.navigate(['/list'])
    })
  }
}
