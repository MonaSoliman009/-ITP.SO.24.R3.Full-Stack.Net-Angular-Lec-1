import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { LanguageService } from '../../../services/language.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink,RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
  lang:string=''
  constructor(
    private _LanguageService:LanguageService
  ){}
  ngOnInit(): void {
    this._LanguageService.getLanguage().subscribe(language =>{
      this.lang=language;
    })
  }

}
