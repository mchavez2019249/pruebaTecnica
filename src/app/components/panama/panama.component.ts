import { Component, OnInit } from '@angular/core';
import {RestApiService} from "../../services/rest-api.service";

@Component({
  selector: 'app-panama',
  templateUrl: './panama.component.html',
  styleUrls: ['./panama.component.css']
})
export class PanamaComponent implements OnInit {
  public listTotal: any = [];
  constructor(private rest: RestApiService) { }

  ngOnInit(): void {
    this.list();
  }

  //list
  list(){
    this.rest.getLatestHN().subscribe(data => {
      console.log(data);
      this.listTotal = data;
    });
  }

}
