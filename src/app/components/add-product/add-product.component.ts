import { Component, OnInit } from '@angular/core';
import { CategoriesService } from '../../../services/categories.service';
import { Icategory } from '../../../models/icategory';
import { Iproduct } from '../../../models/iproduct';
import { FormsModule, NgForm } from '@angular/forms';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-add-product',
  standalone: true,
  imports: [FormsModule,JsonPipe],
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.css',
})
export class AddProductComponent implements OnInit {
  categories: Icategory[] = [] as Icategory[];
  product:Iproduct={} as Iproduct;

  constructor(private _categoriesService: CategoriesService) {}
  ngOnInit(): void {
    this._categoriesService.getAllCategories().subscribe({
      next: (res) => {
        this.categories = res;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  addNewProduct(form:NgForm){

    if(form.valid){
      console.log(this.product);

    }
    
  }
}
