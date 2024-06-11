import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { items } from '../itemsmodel';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})

export class AddItemComponent implements OnInit {
  addItensForm: FormGroup | any;

  constructor(private FormBuilder: FormBuilder, private router: Router, private api: ApiService) {}

  ngOnInit(): void {
    this.addItensForm = this.FormBuilder.group({
      nameItem:['', Validators.required],
      measure:['', Validators.required],
      quantity:[''],
      price:['', Validators.required],
      product: ['', Validators.required]
    })
  }

  submitItems(data: items) {
    //console.log(this.addItensForm.value)
    this.api.addItem(data).subscribe(( res => {
      this.addItensForm.reset()
      this.router.navigate(["/list"])
    }))
  }
}
