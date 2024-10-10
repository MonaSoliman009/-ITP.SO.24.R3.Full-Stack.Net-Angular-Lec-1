import { Component, OnInit } from '@angular/core';
import { StaticProductsService } from '../../../services/static-products.service';
import { LanguageService } from '../../../services/language.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  providers:[StaticProductsService],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

lang:string=''
  constructor(private _StaticProductsService: StaticProductsService,
    private _LanguageService:LanguageService
  ){}
  ngOnInit(): void {
    this._LanguageService.getLanguage().subscribe(language =>{
      this.lang=language;
    })
  }
  
  userName:string="Ali"
  imgUrl:string="https://media.istockphoto.com/id/1337144146/vector/default-avatar-profile-icon-vector.jpg?s=612x612&w=0&k=20&c=BIbFwuv7FxTWvh5S3vB6bkT0Qv8Vn8N5Ffseq84ClGI="

  display(name:string){
    alert(`Hello ${name}`)
  }
  toggleLanguage(){
    this._LanguageService.changeLanguage((this.lang=='en')?'ar':'en')
  }
}
