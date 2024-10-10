import { Injectable } from '@angular/core';
import { Iproduct } from '../models/iproduct';

@Injectable({
  providedIn: 'root'
})
export class StaticProductsService {
 private products:Iproduct[]

  constructor() { 

    this.products=[
      {id:1,name:"Dell Laptop",price:26000,quantity:4,imgUrl:"https://fakeimg.pl/200/",catId:100},
      {id:2,name:"Huawei tablet",price:5000,quantity:0,imgUrl:"https://fakeimg.pl/200/",catId:200},
      {id:3,name:"Hp Laptop",price:8000,quantity:1,imgUrl:"https://fakeimg.pl/200/",catId:100},
      {id:4,name:"Ipad 10",price:23000,quantity:6,imgUrl:"https://fakeimg.pl/200/",catId:300},
      {id:5,name:"Samsung tablet",price:7000,quantity:2,imgUrl:"https://fakeimg.pl/200/",catId:200},
      {id:6,name:"Ipad 11",price:6000,quantity:0,imgUrl:"https://fakeimg.pl/200/",catId:300},

    ]
  }

  getAllProducts():Iproduct[]{

    return this.products
  }

  getProductsByCatId(catId:number):Iproduct[]{
    if(catId==0){
      return this.products
    }
    return this.products.filter((prd)=>prd.catId==catId)
  }

  getProductById(id:number):Iproduct|null{
  let prd=  this.products.find((prd)=>prd.id==id)

    return (prd)?prd:null
  }
}
