import { Component, OnInit } from '@angular/core';
import {RestApiService} from "../../services/rest-api.service";

@Component({
  selector: 'app-centro-america',
  templateUrl: './centro-america.component.html',
  styleUrls: ['./centro-america.component.css']
})
export class CentroAmericaComponent implements OnInit {
  public listTotal: any = [];
  constructor(private rest: RestApiService) { }

  ngOnInit(): void {
    this.list();
  }

  //list
  list(){
    this.rest.getLatestBZ().subscribe(data => {
      console.log(data);
      this.listTotal = data;
    });
  }

}
