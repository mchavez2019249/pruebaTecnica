import { Component, OnInit } from '@angular/core';
import {RestApiService} from "../../services/rest-api.service";

@Component({
  selector: 'app-guatemala',
  templateUrl: './guatemala.component.html',
  styleUrls: ['./guatemala.component.css']
})
export class GuatemalaComponent implements OnInit {
  public listTotal: any = [];
  constructor(private rest: RestApiService) { }
  ngOnInit(): void {
  this.list();
  }

  //list
  list(){
    this.rest.getLatestGT().subscribe(data => {
      console.log(data);
      this.listTotal = data;
    });
  }

}
