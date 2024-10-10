import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProductsComponent } from './components/products/products.component';
import { OrderComponent } from './components/order/order.component';
import { RouterOutlet } from '@angular/router';
import { LanguageService } from '../services/language.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    ProductsComponent,
    OrderComponent,
    RouterOutlet,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title = 'lec1';
  lang: string = '';
  constructor(private _LanguageService: LanguageService) {}
  ngOnInit(): void {
    this._LanguageService.getLanguage().subscribe((language) => {
      this.lang = language;
    });
  }
}
