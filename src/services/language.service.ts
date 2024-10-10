import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

 private language:BehaviorSubject<string>=new BehaviorSubject<string>('en')
  constructor() { }

  getLanguage():Observable<string>{
   return this.language.asObservable()
  }

  changeLanguage(newVal:string){
    this.language.next(newVal)
  }
}
