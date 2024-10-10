import { AfterViewInit, Component, ElementRef, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Icategory } from '../../../models/icategory';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from "../products/products.component";
import { CategoriesService } from '../../../services/categories.service';

@Component({
  selector: 'app-order',
  standalone: true,
  imports: [FormsModule, CommonModule, ProductsComponent],
  templateUrl: './order.component.html',
  styleUrl: './order.component.css'
})
export class OrderComponent implements AfterViewInit,OnChanges,OnInit {
  SelectedCatId:number=0
  Categories:Icategory[]=[]
  totalOrderPrice:number = 0

  // nameInput:ElementRef|undefined=undefined
  // nameInput:ElementRef|null=null
  // nameInput?:ElementRef
 @ViewChild('userNameInp') nameInput!:ElementRef //non null assertion operator
 
  @ViewChild(ProductsComponent) productsCom!:ProductsComponent


  constructor(private _categoriesService:CategoriesService){

  }
  ngOnInit(): void {
    this._categoriesService.getAllCategories().subscribe({
      next:(res)=>{
        this.Categories=res
      },
      error:(err)=>{
        console.log(err);
        
      }
    })
  }

  ngOnChanges(changes: SimpleChanges): void {
   
  }


  ngAfterViewInit(): void {

    console.log(this.productsCom.filteredProducts[0]);
     
  }

  changeValue(){
    this.nameInput.nativeElement.value='Mona'

  }

  changeOrderPrice(newOrderPrice:number){
  this.totalOrderPrice=newOrderPrice
  }
}
