import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StaticProductsService } from '../../../services/static-products.service';
import { Iproduct } from '../../../models/iproduct';
import { ProductsApiService } from '../../../services/products-api.service';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent implements OnInit {

//  @Input('id') s:number=0
@Input() id:number=0
  product:Iproduct|null=null

  constructor(
    private _ActivatedRoute:ActivatedRoute,
    private _StaticProductsService:StaticProductsService,
  private _ProductsApiService:ProductsApiService){}



  ngOnInit(): void {
   this.id= this._ActivatedRoute.snapshot.params['id']

  //  this.product= this._StaticProductsService.getProductById(this.id)

  this._ProductsApiService.getProductById(this.id).subscribe({
    next:(res)=>{
      this.product=res
    },
    error:(err)=>{
      console.log(err);
      
    }
  })
  }


}
