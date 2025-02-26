import { Component } from '@angular/core';
import { ApiServiceService } from '../shared/service/api-service.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {
  public data: any[] = [];
  constructor(private ApiService: ApiServiceService) {

    //this.search("0");

  }

  search(query: any){

		this.ApiService.getData(query.target.value).then(Response => {

      console.log(Response);

      this.data = Response;

    });

  }

}
