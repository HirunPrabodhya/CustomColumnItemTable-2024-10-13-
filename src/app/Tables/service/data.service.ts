import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { BASE_URL } from '../../app.config';
import { Observable, tap } from 'rxjs';
import { ISection } from '../model/myData';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private http:HttpClient = inject(HttpClient);
  private baseUrl:string = inject(BASE_URL);

    getData():Observable<ISection[]>{
      return this.http.get<ISection[]>(this.baseUrl)
                      .pipe(
                        tap((data)=>console.log('service: ',data))
                      )
    }

 
}
