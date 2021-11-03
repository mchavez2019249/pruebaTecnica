import { Component, OnInit } from '@angular/core';
import {RestApiService} from "../../services/rest-api.service";

@Component({
  selector: 'app-honduras',
  templateUrl: './honduras.component.html',
  styleUrls: ['./honduras.component.css']
})
export class HondurasComponent implements OnInit {
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
