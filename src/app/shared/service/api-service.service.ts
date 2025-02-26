import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {
  private apiUrl = environment.apiUrl;
  constructor(private http: HttpClient) { }

  getData(page:any): Promise<any> {
    //console.log(page.target.value);
    return new Promise((resolve, reject) => {
      this.http.get<any>(`${this.apiUrl}?page=${page}`).subscribe({ 
        error: (error) => reject(error),
        next: (value) => {console.log(value);resolve(value);},
      })
    })
  }

}
