import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { Iproduct } from '../../../models/iproduct';
import { CommonModule } from '@angular/common';
import { Icategory } from '../../../models/icategory';
import { FormsModule } from '@angular/forms';
import { CustomDirectiveDirective } from '../../../directives/custom-directive.directive';
import { ReversePipe } from '../../../pipes/reverse.pipe';
import { StaticProductsService } from '../../../services/static-products.service';
import { Router, RouterLink } from '@angular/router';
import { ProductsApiService } from '../../../services/products-api.service';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [FormsModule, CommonModule, CustomDirectiveDirective, ReversePipe,RouterLink],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent implements OnChanges,OnInit {
  filteredProducts: Iproduct[]=[];
  totalOrderPrice: number = 0;
  @Input('selcetedCatId') recievedSelectedCatId: number = 0;
  myClass: string = 'bg-danger';
  myStyle: string = 'color:white';
  myDate: Date = new Date();

  @Output() orderPriceChanged: EventEmitter<number>;

  constructor(private _StaticProductsService: StaticProductsService,
    private _ProductsApiService:ProductsApiService,
    private router:Router
  ) {
    
    this.orderPriceChanged = new EventEmitter<number>();

    // this.filteredProducts = this._StaticProductsService.getAllProducts();
  }
  ngOnInit(): void {
    this._ProductsApiService.getAllProducts().subscribe({
      next:(res)=>{
        this.filteredProducts=res
      },
      error:(err)=>{
        console.log(err);
        
      }
    })
  }
  ngOnChanges() {
  // this.filteredProducts= this._StaticProductsService.getProductsByCatId(this.recievedSelectedCatId)
  if(this.recievedSelectedCatId==0){
    this._ProductsApiService.getAllProducts().subscribe({
      next:(res)=>{
        this.filteredProducts=res
      },
      error:(err)=>{
        console.log(err);
        
      }
    })
  }else{
    this._ProductsApiService.getProductsByCatId(this.recievedSelectedCatId).subscribe({
      next:(res)=>{
        this.filteredProducts=res
      },
      error:(err)=>{
        console.log(err);
        
      }
    })
  }

  }

  buy(count: string, price: number) {
    // this.totalOrderPrice=price *parseInt(count)
    // this.totalOrderPrice=price * Number(count)
    this.totalOrderPrice += price * +count;

    this.orderPriceChanged.emit(this.totalOrderPrice);
  }

  trackByFn(index: number, prd: Iproduct) {
    return prd.id;
  }

  goToDetails(id:number){
    // this.router.navigateByUrl(`/details/${id}`)
    this.router.navigate(['details',id])

  }
}
